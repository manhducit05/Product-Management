const express = require('express')
const router = express.Router()
const accountController = require('../../controller/admin/account.controller')
router.get('/',accountController.index)
router.get('/create',accountController.create)
router.post('/create',accountController.postAfterCreate )
router.get('/view/:id',accountController.viewOnes )
router.patch('/delete/:id',accountController.deleteAccount )
router.get('/change-password/:id',accountController.changePassword )
router.patch('/change-password/:id',accountController.sendAfterChange )

module.exports = router