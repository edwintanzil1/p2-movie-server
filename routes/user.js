const express = require('express')
const router = express.Router()
const Controller = require('../controller/log')
// const authorization = require('../middleware/authorization')

router.post('/register' ,Controller.register)

router.post('/login', Controller.login)

module.exports = router