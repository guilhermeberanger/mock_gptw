const app = require('./src/server/server')

//Listen
const port = process.env.PORT || 3030
app.listen(port , () =>{
    console.log(`Listen in port -> ${port}`)
})

//bearer