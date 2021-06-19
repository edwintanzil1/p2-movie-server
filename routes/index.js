const express = require('express')
const router = express.Router()
const home = require('./home')
const movies = require('./movies')
const user = require('./user')
const history =require('./history')
const error = require('../middleware/error')


router.use('/', home)

router.use('/movies', movies)
router.use('/users', user)
router.use('/histories', history)


router.use(error)

module.exports = router