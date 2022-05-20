//External imports
const express = require('express')
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Internal imports
const router = require('../routes/router')
const authorization = require('../midd/authorization')

//Instancied Express
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', authorization, router )


module.exports = app