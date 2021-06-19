const { Movies } = require('../models');

function authorization (req, res, next) {
    console.log(req.user, "autho");
    // console.log(req.body, "body dari autho");
    if (req.user.role === 'Admin') {
        // console.log("masuk autho");
        next();
    } else {
        const id = +req.params.id;
        Movies.findByPk(id)
        .then(data => {
            console.log(data);
            if (data) {
                if (data.authorId === req.user.id) {
                    next();
                } else {
                    next({code: 403});
                    
                }   
            } else {                
                next({code: 404});
            }
        })
        .catch(err => {
            next({code: 500});
            console.log(err);
        })
            
    }
}

module.exports = authorization;