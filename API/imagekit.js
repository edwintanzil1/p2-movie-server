const FormData = require('form-data')
const axios = require('axios')

function toImageKit(req, res, next) {
    console.log(process.env.IMG_KEY);
    console.log(req.file, "file");
    console.log("masuk");
  if (req.file.size > 255000) {
    next({code:400, msg: "file size is too big"})
  } else{
    let api_key = Buffer.from(process.env.IMG_KEY, "utf-8").toString("base64")

  const data = new FormData()
  data.append('file', req.file.buffer.toString("base64"))
  data.append('fileName', req.file.originalname)

  axios({
    url: 'https://upload.imagekit.io/api/v1/files/upload',
    method: 'post',
    headers: {
      Authorization: `Basic ${api_key}`,
      ...data.getHeaders()
    },
    data: data
  }).then( data => {
      // console.log(data);
      // const {data} = data
      req.imageUrl = data.data.url
      console.log(req.imageUrl, "imagekit"); 
      next()
  }).catch( err => {
    console.log(err, "imgakit");
    next({code:500})
  })
  }
}

module.exports = toImageKit