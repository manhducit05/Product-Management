const express = require('express')
const router = express.Router()
const accountController = require('../../controller/admin/account.controller')
router.get('/',accountController.index)
router.get('/create',accountController.create)
router.post('/create',accountController.postAfterCreate )

module.exports = router