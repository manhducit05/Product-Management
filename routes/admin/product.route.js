const express = require('express')
const  router = express.Router()
const productController = require('../../controller/admin/product.controller')
router.get('/',productController.index)
router.patch('/changeStatus/:status/:id',productController.changeStatus)
router.delete('/delete/:id',productController.deleteItem)

module.exports = router