const express = require('express')
const router = express.Router()
const roleController = require('../../controller/admin/role.controller')
router.get('/',roleController.index)
router.get('/create',roleController.create)
router.post('/create',roleController.postAfterCreate)
router.get('/edit/:id',roleController.edit)
router.patch('/edit/:id',roleController.postAfterEdit)
router.get('/delete/:id',roleController.deleteRole)
router.get('/view/:id',roleController.viewOne)
router.get('/permission',roleController.permission)
router.patch('/permission',roleController.editPermission)


module.exports = router