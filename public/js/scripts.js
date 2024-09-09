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

