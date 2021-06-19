
const bcrpyt = require('bcryptjs');
const salt = bcrpyt.genSaltSync(5);

function hashPassword (raw) {
    return bcrpyt.hashSync(raw, salt);
}

function comparePassword (raw, hashPassword) {
    return bcrpyt.compareSync(raw, hashPassword);
}

module.exports = { hashPassword, comparePassword };