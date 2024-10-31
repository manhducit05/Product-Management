const productsRouter = require('./product.route')
const homeRouter = require('./home.route')
const cartMiddleware = require('../../middleware/client/cart.middleware')
const cartRouter = require('./cart.route')
module.exports = (app)=>{
  app.use('/', cartMiddleware.cartID, homeRouter )
  app.use('/product', cartMiddleware.cartID, productsRouter)
  app.use('/cart', cartMiddleware.cartID, cartRouter )
  app.use((req, res, next) => {
    res.status(404).send('Trang không tồn tại - 404');
  });
}