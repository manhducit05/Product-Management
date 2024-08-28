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
  const findKey = {
    deleted: false
  }
  if(req.query.status)
    findKey.status = req.query.status
  const products = await Product.find(findKey)
  // console.log(products)
  
  res.render('admin/pages/product/index.pug', { titlePage: 'Product Page', message: 'Products', products: products, statusFilterBtn: statusFilterBtn})
}
module.exports = {
  index
}