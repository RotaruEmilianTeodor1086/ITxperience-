const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize') 



const app = express() 
app.use(bodyParser.json())

app.listen(8080)