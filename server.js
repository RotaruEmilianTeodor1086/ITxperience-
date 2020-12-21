const express = require('express')
const bodyParser = require('body-parser')
const Sequelize  = require('sequelize')

const sequelize = new Sequelize('my_database','app','clau_the_best',{

    dialect:'mysql'

} )
const Note= sequelize('note',{
    idNote:{
        type: Sequelize.INTEGER
    },
    title:{
        type: Sequelize.STRING  
    },    
    text:{
        type: Sequelize.STRING

    },
    image:{
        type: Sequelize.BLOB
    },
    date:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING 

    }
})
const Subject = sequelize('subject',{
    idSubject:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.STRING
    },
    subjectType:{
        type: Sequelize.ENUM , 
        allowNull: false,
        values: ['CURS','SEMINAR','ACTIVITATE_INDIVIDUALA']
    },
    teacher:{
        type: Sequelize.STRING,
        defaultValue: "Toma"
    }
})
Subject.hasMany(Note)


const app = express() 
app.use(bodyParser.json())

app.listen(8080)