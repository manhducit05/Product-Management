const index = (req, res) => {
  res.render('client/pages/products/index.pug', { title: 'Product Page', message: 'Products' })
}
module.exports = {
  index
}