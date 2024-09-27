const express = require('express')
const router = express.Router()
const productController = require('../../controller/client/product.controller')
router.get('/',productController.index)
router.get('/:id',productController.viewProduct)

module.exports = router