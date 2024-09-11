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
      deleteForm.action = deleteForm.getAttribute('raw-path')+`/${id}?_method=DELETE`
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