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
  if(req.query.status)
    find.status = req.query.status
  if(req.query.title){
    var searchKey = req.query.title
    const regex = new RegExp(searchKey,"i") //tạo chuỗi regex
    find.tittle = regex
  }

  console.log(find)
  const products = await Product.find(find)
  // console.log(products)
  
  res.render('admin/pages/product/index.pug', { titlePage: 'Product Page', message: 'Products', products: products, statusFilterBtn: statusFilterBtn, searchKey: searchKey})
}



module.exports = {
  index
}