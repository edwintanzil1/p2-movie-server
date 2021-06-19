const { hashPassword, comparePassword } = require('../helper/bycrypt')
const { validate} = require('../helper/jwt')
const {User} = require('../models/index')

function authentication(req, res , next){
    const access_token = req.headers.access_token
    // console.log(access_token);
    
    if (access_token) {
      try{
        const payload = validate(access_token)
        // console.log(payload);
        User.findByPk(payload.id)
        .then(user => {
          if (user) {
            req.user = {id: user.id, role: user.role}
            // console.log(req.user, "authe"); 
              next()
            } else {
              res.status(401).json({message: 'invalid JWT'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
       }
       catch {
        res.status(401).json({message: 'invalid JWT'})
       }
    } else {
        res.status(401).json({message: 'logn required'})
    }

   
}

module.exports = authentication