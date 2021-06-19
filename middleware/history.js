const HistoryController = require('../controller/history')
const {History} = require('../models/history')

const history = (req,res,next) => {
    const method = req.method
    const url = req.url.substring(1)
    const time = new Date().toLocaleDateString()
    const user = req.user
   
    // console.log(url, method, time, user, "<<<<<<<<<<<history");
    let description = `${user.role} ${method} Movies with id ${url} `
    console.log(description);
    HistoryController.autoWrite(description)

    next()
}

module.exports = history