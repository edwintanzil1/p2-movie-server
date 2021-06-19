const {Movie, Genre, User} = require('../models/index')
const { hashPassword, comparePassword } = require('../helper/bycrypt')
const {createJWT} = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');

class Controller {

   static register(req,res, next ){
       console.log(req.body);
    User.create({
        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
        role : "Admin",
        phoneNumber : req.body.phoneNumber,
        address : req.body.address
    })
    .then(data => {
        res.status(201).json({
            id : data.id,
            email : data.email
        })
    })
    .catch(err => {
        console.log(err);
        if (err.name === "SequelizeValidationError"){
            const errors = err.errors.map(el => el.message);   
            // res.status(400).json(errors)
            next({code: 400})
        } else {
            // res.status(500).json("Internal Error");
            next({code: 500})
        }
    })
   }
   static login(req,res, next){
    const email = req.body.email
    const password = req.body.password
    // console.log(req.body);
    // console.log("masuk");
    User.findOne({
        where : {
            email
        }
    })
    .then((data) => {
        if (data) {
            if(comparePassword(password, data.password)){
                const token = createJWT({
                    id : data.id,
                    email : data.email,
                    role: data.role,
                    name: data.name
                })
                res.status(200).json({access_token : token});
            }
        }else {
            // res.status(401).json({error : "Invalid login"});
            next({code: 401})
        }
    })
    .catch((err) => {
        // console.log(err);
        // res.status(500).json("Internal Error");
        console.log(err);
        next({code: 500})
    })
            
   }
   

static google(req, res, next) {
    const client = new OAuth2Client(process.env.GOOGLE_ID);
        let payload = null;
        console.log(process.env.GOOGLE_ID);
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_ID
        }).then(ticket => {
            payload = ticket.getPayload();
            console.log(payload);

            return User.findOne( {
                where : {
                    email: payload.email
                }
            })
        })
        .then(dataUserFound => {
            if (dataUserFound) {
                return dataUserFound
            } else {
                return User.create({
                    email: payload.email,
                    password: process.env.GOOGLE_SECRET,
                    role: 'staff'
                })
            }
        })
        .then(dataUser => {
            const access_token = createToken({
                id: dataUser.id,
                email: dataUser.email,
                role: dataUser.role
            })
            console.log(access_token);
            res.status(200).json({access_token});
        })
        .catch(err => {
            console.log(err);
            next({code: 500, message: err});
        })
    }

}

module.exports = Controller