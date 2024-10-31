const Cart = require('../../models/cart.model')
const Product = require('../../models/products.model')

const addProduct = async (req, res) => {
    const id = req.cookies.cartID
    console.log(req.body)
    const product = req.body
    await Cart.updateOne({_id: id},{
      $push: {products: product}
    })
  req.flash('update', 'Thêm sản phẩm vào giỏ hàng thành công!');
  res.redirect('back')
}
const viewCartToPay = async (req, res) => { 
  try {
    const cart = await Cart.findOne({
        _id: req.cookies.cartID,
       status: "starting" 
      });
    if (cart && cart.products.length > 0) {
      for (let item of cart.products) {
        console.log(item.productID)
        const productInfo = await Product.findOne({ _id: item.productID });
        console.log(productInfo)
        item.productInfo = productInfo; // Gắn productInfo vào từng item
      }
    }
    
    res.render('client/pages/products/cart-pay.pug', { products: cart.products });
  } catch (error) {
    const products = []
    res.render('client/pages/products/cart-ship.pug', {products: products});
  }
};
const viewCartToShip = async (req, res) => { 
  try {
    const cart = await Cart.findOne({ status: "shipping" });
    
    if (cart && cart.products.length > 0) {
      for (let item of cart.products) {
        console.log(item.productID)
        const productInfo = await Product.findOne({ _id: item.productID });
        console.log(productInfo)
        item.productInfo = productInfo; // Gắn productInfo vào từng item
      }
    }

    res.render('client/pages/products/cart-ship.pug', { products: cart.products });
  } catch (error) {
    const products = []
    res.render('client/pages/products/cart-ship.pug', {products: products});

  }
};
const payment = async (req, res) => {
  const id = req.cookies.cartID
  const userInfor = req.body
  await Cart.updateOne({_id: id},{
    userInfor : userInfor,
    status : "shipping"
})
  req.flash('update', 'You have successfully paid!')
  res.clearCookie('cartID'); 
  res.redirect('back')
}
  module.exports = {
    addProduct,
    viewCartToPay,
    viewCartToShip,
    payment
  }