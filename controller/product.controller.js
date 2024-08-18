const index = (req, res) => {
  res.render('client/pages/products/index.pug', { titlePage: 'Product Page', message: 'Products' })
}
module.exports = {
  index
}