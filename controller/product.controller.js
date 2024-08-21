const Product = require("../models/products.model")
const index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false
  })
  console.log(products)
  res.render('client/pages/products/index.pug', { titlePage: 'Product Page', message: 'Products', products: products })
}
module.exports = {
  index
}