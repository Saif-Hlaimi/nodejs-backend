const { Router } = require("express")

const route = require("express").Router()
const body = require("express").urlencoded()
const authcontroller = require('../controllers/auth.controller')

route.get('/register', authcontroller.getregisterpage)
route.post("/register", authcontroller.postregisterdata)

module.exports = route