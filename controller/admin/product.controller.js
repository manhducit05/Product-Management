const { paging } = require("../../helper/paging")
const Product = require("../../models/products.model")

const index = async (req, res) => {
  const statusFilterBtn = [
    {
      class: "btn btn-outline-success btnActive",
      status:"",
      text: "Tất cả"
    },
    {
      class: "btn btn-outline-success btnActive",
      status:"active",
      text: "Hoạt động"
    },
    {
      class: "btn btn-outline-success btnActive",
      status:"inactive",
      text: "Dừng hoạt động"
    }
  ]
  const find = {
    deleted: false,
  }
  //set status
  if(req.query.status)
    find.status = req.query.status
  //set title (regex)
  if(req.query.title){
    var searchKey = req.query.title
    const regex = new RegExp(searchKey,"i") //tạo chuỗi regex
    find.tittle = regex
  }

  //paging
  const count =  (await Product.find(find)).length
  const page = paging(count, req)

  const products = await Product.find(find).limit(page.limit).skip((page.currentPage - 1)*page.limit)
  // console.log(count)
  res.render('admin/pages/product/index.pug', { titlePage: 'Product Page', message: 'Products', products: products, statusFilterBtn: statusFilterBtn, searchKey: searchKey, count:page.numOfPages})
}

module.exports = {
  index
}