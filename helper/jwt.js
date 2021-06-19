
const jwt = require('jsonwebtoken');


function createJWT(payload) {
    return jwt.sign(payload, "secret");
}

function validate(token){
    return jwt.verify(token, "secret")
}

module.exports = { createJWT, validate}