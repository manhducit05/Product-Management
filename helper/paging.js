const paging = (count, req)=>{
  const numOfPages = Math.ceil(count/10)
  const page = {
    
    numOfPages : numOfPages,
    limit: 10
  }

  if(req.query.page){
    page.currentPage = req.query.page
  }
  console.log(page)
  return page
}
module.exports = {
  paging
}