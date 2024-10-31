const express = require('express')
const router = express.Router()
const cartController = require('../../controller/client/cart.controller')

router.post('/add/:id', cartController.addProduct)
router.get('/view/pay', cartController.viewCartToPay)  
router.get('/view/ship', cartController.viewCartToShip)  
router.post('/payment', cartController.payment)  

module.exports = router