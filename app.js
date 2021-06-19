require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes/index')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const cors = require('cors')

 
app.use(cors())
app.use('/', router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)

  })






