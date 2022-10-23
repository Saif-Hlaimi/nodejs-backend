const authmodel = require("../models/auth.model")

const body = require("body-parser")

exports.getregisterpage = (req, res, next) => {
    res.render('sign up formulaire')


}

exports.postregisterdata = (req, res, body, next) => {
    authmodel.registermodel(req.body.nom, req.body.prenom, req.body.mail, req.body.mot_de_passe)

}