const Product = require("../../models/products.model")
const index = async (req, res) => {
  const products = await Product.find({
  })
  console.log(products)
  res.render('admin/pages/product/index.pug', { titlePage: 'Product Page', message: 'Products', products: products })
}
module.exports = {
  index
}