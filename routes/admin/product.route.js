const express = require('express')
const  router = express.Router()
//multer upload storage
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })

const productController = require('../../controller/admin/product.controller')
router.get('/',productController.index)
router.patch('/changeStatus/:status/:id',productController.changeStatus)
router.patch('/delete/:id',productController.deleteItem)//soft delete
router.patch('/multi-change', productController.changeMulti)
router.get('/create', productController.createProduct)
router.post(
  '/create',
  upload.single('thumbnail'),
  productController.postAfterCreate
)
module.exports = router