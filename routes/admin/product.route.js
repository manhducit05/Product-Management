const express = require('express')
const  router = express.Router()
const productController = require('../../controller/admin/product.controller')
router.get('/',productController.index)
router.patch('/changeStatus/:status/:id',productController.changeStatus)
router.patch('/delete/:id',productController.deleteItem)//soft delete
router.patch('/multi-change', productController.changeMulti)
router.get('/create', productController.createProduct)
router.post('/create', productController.postAfterCreate)
module.exports = router