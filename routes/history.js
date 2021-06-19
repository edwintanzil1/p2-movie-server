const express = require('express')
const router = express.Router()
const HistoryController = require('../controller/history')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')



router.use( authentication) 
router.get('/', HistoryController.get)

module.exports = router