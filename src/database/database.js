//External imports
const express = require('express');
const app = express()

//Firebase
const admin = require('firebase-admin')
const serviceAccount = require("./gptw-b15b8-firebase-adminsdk-78fwk-a51e712f93.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

//DataBase
const db = admin.firestore()

module.exports = db