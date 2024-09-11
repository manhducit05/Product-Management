const express = require('express')
const  router = express.Router()
const productController = require('../../controller/admin/product.controller')
router.get('/',productController.index)
router.get('/changeStatus/:status/:id',productController.changeStatus)
router.get('/delete/:id',productController.deleteItem)

module.exports = router