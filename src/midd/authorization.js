//External Imports
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Middleware authentication
module.exports = async (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).send('Não autorizado')
    }
    //TOKEN
    const token = auth.split(" ")[1];

    //authenication
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).send('Não autorizado')
        }
        req.email = decoded.email;
    })
    next()
}

