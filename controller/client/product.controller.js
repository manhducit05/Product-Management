const Product = require("../../models/products.model")
const index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false
  })
  console.log(products)
  res.render('client/pages/products/index.pug', { titlePage: 'Product Page', message: 'Products', products: products })
}
const viewProduct = async(req, res)=>{
  const id = req.params.id
  const find = {
    _id: id,
    deleted: false
  }
  const product = await Product.findOne(find)
  console.log(product)
  res.render('client/pages/products/read.pug',{ product: product})
}
module.exports = {
  index,
  viewProduct
}