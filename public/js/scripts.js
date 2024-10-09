const activeBtn = document.querySelectorAll('.btnActive')
let url = new URL(window.location.href)


//filter by status
activeBtn.forEach((element)=>{
  element.addEventListener('click',()=>{
    const status = element.getAttribute('btn-status')
    url.searchParams.set("status", status)
    console.log(url);
    window.location.href = url.href;
  })
})
//search method
const searchTxt = document.querySelector("#searchTxt")
const searchForm = document.querySelector("#searchForm")
let key
if(searchTxt){
  searchTxt.addEventListener('input',(e)=>{
    key = e.target.value;
 })
 searchForm.addEventListener('submit',(e)=>{
   e.preventDefault()
   if(key){
     url.searchParams.set("title", key)
   }
   else{
     url.searchParams.delete("title")
   }
   console.log(url);
   window.location.href = url.href;
 })
}

//paging
const pageBtn = document.querySelectorAll("#pageBtn")

pageBtn.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault()
    const page = parseInt(item.innerHTML)
    if(page){
      url.searchParams.set("page", page)
    }
    else{
      url.searchParams.delete("page")
    }
    console.log(url);
    window.location.href = url.href;
  })
})

//change status
const statusBtn = document.querySelectorAll('[button-change-status]')
const statusForm = document.querySelector('#form-change-status')
if(statusBtn.length>0){
  statusBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
      const status = button.getAttribute('data-status') 
      const id = button.getAttribute('data-id')
      console.log(status, id)
      if(status=='active'){
        statusForm.action = statusForm.getAttribute('raw-path')+`/inactive/${id}?_method=PATCH`
      }
      else{
        statusForm.action = statusForm.getAttribute('raw-path')+`/active/${id}?_method=PATCH`
      }
      statusForm.submit()
    })
  })
}
//delete item
const deleteBtn1 = document.querySelectorAll('[button-delete-item-step1]')
const deleteForm = document.querySelector('#form-delete-item')
if(deleteBtn1.length>0){
  deleteBtn1.forEach(button => {
     button.addEventListener('click',()=>{
      const id = button.getAttribute('data-id')
      console.log(id)
      deleteForm.action = deleteForm.getAttribute('raw-path')+`/${id}?_method=PATCH`
      console.log(deleteForm.action)
     })
  });
}
const deleteBtn2 = document.querySelector('[button-delete-item-step2]');
if (deleteBtn2) {
  deleteBtn2.addEventListener('click', () => {
    deleteForm.submit();
  });
}
//flash: show alert
const alert = document.querySelector('[show-alert]');
if(alert){
  const time = parseInt(alert.getAttribute('data-time'));

  setTimeout(() => {
    alert.classList.add('hidden');
  }, time);
}

//multi change
const selectAll = document.querySelector('#checkAll') // Checkbox 'Chọn tất cả'
const selectOne = document.querySelectorAll('input[name="checkOne"]') // Tất cả các checkbox con
const txtIds = document.querySelector('#txtIds')
let ids = [];
if(selectAll){
// Hàm cập nhật mảng ids
const updateIdsArray = (checkbox) => {
  const id = checkbox.getAttribute('data-id'); // Lấy thuộc tính 'data-id' của checkbox
  if (checkbox.checked) {
    if (!ids.includes(id)) {
      ids.push(id); // Thêm id vào mảng nếu chưa có
    }
  } else {
    const index = ids.indexOf(id);
    if (index > -1) {
      ids.splice(index, 1); // Xóa id khỏi mảng nếu tồn tại
    }
  }
  txtIds.value = ids
  console.log(ids); // In ra mảng ids để kiểm tra
};

// Sự kiện 'change' cho checkbox 'Chọn tất cả'
selectAll.addEventListener('change', () => {
  selectOne.forEach(checkbox => {
    checkbox.checked = selectAll.checked; // Đánh dấu hoặc bỏ đánh dấu tất cả checkbox con
    updateIdsArray(checkbox); // Cập nhật mảng ids khi 'Chọn tất cả'
  });
});

// Sự kiện 'change' cho từng checkbox con

selectOne.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    updateIdsArray(this); // Cập nhật mảng ids khi từng checkbox con thay đổi
  });
});
}


//edit btn
const sendBtn = document.querySelector("#submitBtn")
const editForm = document.querySelector("#editForm")
const cancelBtn = document.querySelector("#cancelBtn")

const inputs = document.querySelectorAll('#editForm input')
if(sendBtn){
  sendBtn.addEventListener('click',()=>{
    const id = sendBtn.getAttribute('product-id')
    editForm.action = `/admin/product/edit/${id}?_method=PATCH`
    editForm.submit()
  })
}

