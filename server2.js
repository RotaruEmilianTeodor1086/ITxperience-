require('dotenv').config() ; 
const express = require('express')
const app = express()
let bodyParser = require('body-parser')  
let cors = require('cors')
const port = 2000 
app.use(cors())  
app.use(bodyParser.json())  
app.use(bodyParser.urlencoded({extended: true}))  
require(`${__dirname}/app/routes`)(app)  
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
