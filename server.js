const express = require("express")
var body = require("body-parser").urlencoded({ extended: true })
const path = require("path")
const db = require("mongoose")
const { cp } = require("fs")
app = express()
app.set('view engine', "ejs")
app.set("views", "views")


app.use(express.static('/public/Images'));
var url = "mongodb://localhost:27017/project"
db.connect(url)

var S1 = db.Schema([{
    nom: String,
    prenom: String,
    email: String,
    password: String,
    roman_per: String
}])

var compte = db.model('compte', S1)

var S2 = db.Schema({



})

app.get("/", (req, res) => {
    res.render("bienvenu")
})

app.get("/register", (req, res) => {
    res.render("sign up formulaire")

})

app.post("/register", body, (req, res) => {

    compte.find({ "email": req.body.mail }, (err, result) => {
        if (result == "") {

            compte.insertMany({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.mail,
                password: req.body.mot_de_passe
            }).then(() => {
                console.log("inserted !")
                res.redirect("sign in formulaire")
            })

        } else {

            res.send("mail exist ")
        }
    })


})

app.get("/signin", (req, res) => {
    res.render("sign in formulaire")
})

app.post("/signin", body, (req, res) => {

    compte.find({ "email": req.body.mail }, (err, result) => {
        if (result == "") {
            res.send("account not found ! ")
        } else {
            res.redirect("choisir")
        }
    })
})

app.get("/choisir", (req, res) => {
    res.render("choisir")
})




















app.listen(27017, () => {
    console.log("server is running")
})