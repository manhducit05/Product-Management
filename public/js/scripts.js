const activeBtn = document.querySelectorAll('.btnActive')
activeBtn.forEach((element)=>{
  element.addEventListener('click',()=>{
    const status = element.getAttribute('btn-status')
    let url = new URL(window.location.href)
    url.searchParams.set("status", status)
    console.log(url);
    window.location.href = url.href;
  })
})