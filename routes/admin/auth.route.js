const express = require('express')
const router = express.Router()
const authController = require('../../controller/admin/auth.controller')
router.get('/login',authController.login)
router.post('/login',authController.loginValidation)

module.exports = router