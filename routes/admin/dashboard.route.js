const express = require('express')
const router = express.Router()
const dashboardController = require('../../controller/admin/dashborad.controller')
router.get('/',dashboardController.dashboard)

module.exports = router