const {Movie, Genre} = require('../models/index')
class Controller {

    static moviesPost(req,res, next){
        // console.log(req.body);
        // console.log(req.user);
        // console.log(data);
        // console.log(req.body, "body");
        const newData = {
            name: req.body.name,
            synopsis: req.body.synopsis,
            trailerUrl:req.body.trailerUrl, 
            imgUrl:req.body.imgUrl,
            rating: req.body.rating,
            status: "Active",
            authorId: req.user.id,
        }
        Movie.create(newData, {})
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
                res.status(400).json(errorList)
            } else {
                res.status(500).json(err)
            }
        })
    }

    static read(req,res, next){
        // console.log(req.body);
        Movie.findAll({
            include: Genre
        })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            // console.log(err);
            // res.status(500).json('bad gateway')
            next({code: 500})
        })
    }

    static readId(req,res){
        // console.log(req.user);
        const id = +req.params.id
        // console.log(id);
        Movie.findByPk(id)
        .then((data) => {
            if (data === null) res.status(404).json("No id with that number")
            else res.status(200).json(data)
        })
        .catch((err) => {
            // console.log(err);
            // res.status(500).json('bad gateway')
            next({code: 500})
        })
    }
    static editId(req,res,next){
        
        const newData = {
            name: req.body.name,
            synopsis: req.body.synopsis,
            trailerUrl:req.body.trailerUrl, 
            imgUrl : req.imageUrl, 
            rating: req.body.rating,
            status: req.body.status
        }
        const id = +req.params.id
      

        
        Movie.update(newData, {
            where: {
                id: id
        }})
        .then((data) => {
        //    console.log(data.type);
        //    console.log(id);
           if (data[0]){
            res.status(200).json("Updated");
        }else {
            // res.status(404).json("Not Found");
            next({code: 404})
        }
        })
        .catch((err) => {
            console.log(err, "err");
            // res.status(500).json('bad gateway')
            next({code: 500})
        })
    }

    static status(req,res,next ){
        const id = +req.params.id
        // console.log(id);
        console.log(req, "req");
        const stat ={
            status : req.body.status
        }
        console.log(id, req.body);
        Movie.update(stat, {
            where: {
                id: id
        }})
        .then((data) => {
        //    console.log(data.type);
        //    console.log(id);
           if (data[0]){
            res.status(200).json("Status updated");
        }else {
            // res.status(404).json("Not Found");
            next({code: 404})
        }
        })
        .catch((err) => {
            console.log(err, "err");
            // res.status(500).json('bad gateway')
            next({code: 500})
        })
    }

    static delete(req, res, next) {
        const id = +req.params.id;
        
        Movie.destroy({
            where: {
                id
            }
        })
            .then((data) => {
                
                if (data){
                    res.status(200).json("Deleted");
                }else {
                    // res.status(404).json("Not Found");
                    next({code: 404})
                }
            })
            .catch((err) => {
                // res.status(500).send(err);
                next({code: 500})
            })
    }

    static upload (req,res, next){
        const id = +req.params.id 
        // console.log(id);
        // console.log(req.imageUrl, "di controler");
        const newData = {
        
            imgUrl : req.imageUrl 
            
        }
        Movie.update(newData, {
        where: {
            id: id
        }})
        .then((data) => {
      
        if (data[0]){
            res.status(200).json("Updated");
        }else {
          
            next({code: 404})
        }
        })
        .catch((err) => {
            // console.log(err, "err ctrl");
           
            next({code: 500})
        })
    }
    
}

module.exports = Controller