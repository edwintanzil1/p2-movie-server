const {Movie, Genre, History} = require('../models/index')
class HistoryController {

    static autoWrite(log, req, res,next){

        History.create({action: log}, {})
        .then((data) => {
            res.status(200).json(data)
            // next({code: 200})
        })
        .catch((err) => {
            // console.log(err, "ini err");
            if (err.name === "SequelizeValidationError") {
                let errorList = [] 
                err.errors.forEach(el => {
                    // console.log(el);
                    errorList.push(el.message)
                });
                // res.status(400).json(errorList)
                next({code: 400, msg: errorList.toString()})
            } 
            else {
                next({code: 500})
                // res.status(500).json(err)
            }
        })
    }

    static get(req,res, next){
         // console.log(req.body);
         History.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            // console.log(err);
            // res.status(500).json('bad gateway')
            next({code: 500})
        })
    }

}

module.exports = HistoryController