function error(err, req, res, next) {
    let code = 500
    let msg = ""

    // console.log(err, "di handler" );
    if (err.code === 500) {
        code = 500;
        msg = "Internal Server Error";
    } else if (err.code === 400) {
        code = 400;
        msg = err.msg;
    } else if (err.code === 404) {
        code = 404;
        msg = " Not found";
    } else if (err.code === 401) {
        code = 401
        msg =  "Invalid email/password";
    } else if (err.code === 403) {
        code = 403;
        msg =  "Forbidden access";
    }
    res.status(code).json({msg});
}

module.exports = error