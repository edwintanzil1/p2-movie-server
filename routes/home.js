const express = require('express')
const router = express.Router()
const Controller = require('../controller/home')

router.get('/', Controller.home)

module.exports = router