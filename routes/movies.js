const express = require('express')
const router = express.Router()
const Controller = require('../controller/movies')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const toImageKit = require('../API/imagekit')
const history = require('../middleware/history')
const multer = require('multer')
const upload = multer()



router.use( authentication) 
router.post('/', history, Controller.moviesPost)
router.get('/',  Controller.read)

// router.use(authorization)
router.use( authorization)
router.post('/upload/:id', upload.single('poster'), toImageKit, Controller.upload )
// router.use(history)
router.put('/:id', Controller.editId)
router.get('/:id', Controller.readId)
router.patch('/:id', Controller.status)
router.delete('/:id',  Controller.delete)


module.exports = router