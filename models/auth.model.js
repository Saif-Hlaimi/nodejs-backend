const { rejects } = require("assert")
const { default: mongoose } = require("mongoose")
const db = require("mongoose")


var S1 = db.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String


})
var compte = db.model('compte', S1)
var url = "mongodb://localhost:27017/project"

/*exports.registermodel = (nom, prenom, email, password) => {

    return Promise = ((resolve, reject) => {
            db.connect(url).then(() => {

                return compte.findOne({ email: email })

            }).then((user) => {
                if (user) {
                    db.disconnect()
                    reject("email is used ")
                } else {
                    res.send(" find ")
                }
            })




        }

    )
}*/