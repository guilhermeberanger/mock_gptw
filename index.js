//External imports
const express = require('express')
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Internal imports
const router = require('./src/routes/router')
const authorization = require('./src/midd/authorization')

//Instancied Express
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', authorization, router )


//Listen
const port = process.env.PORT || 3030
app.listen(port , () =>{
    console.log(`Listen in port -> ${port}`)
})

//bearer