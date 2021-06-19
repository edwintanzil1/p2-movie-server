class Controller {

    static home(req,res){
        res.status(200).send("home")
    }
}

module.exports = Controller