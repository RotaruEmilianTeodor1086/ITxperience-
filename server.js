const express = require('express')
const bodyParser = require('body-parser')
const Sequelize  = require('sequelize')
const { format } = require('sequelize/types/lib/utils')
const sequelize = new Sequelize('my_database','app','clau_the_best',{

    dialect:'mysql'

} )
const Note= sequelize.define('note',{

    title:{
        type: Sequelize.STRING ,
        validate:{
            len: [2,40]
        } 
    },    
    text:{
        type: Sequelize.STRING


    },
    image:{
        type: Sequelize.BLOB
    },
    date:{
        type: Sequelize.STRING,
        validate:{
            isDate:true ,
            isAfter : true
        }
    },
    email:{
        type: Sequelize.STRING,
        validate:{
            len: [2,40],
            isEmail: true,
            isUnique: sequelize.validateIsUnique('email', 'That email is being used. Please choose a different email address'),
        }  

    }
})
const Subject = sequelize.define('subject',{
    name:{
        type: Sequelize.STRING, 
        allowNull: false,
        validate:{
            len:[2,40],
            isAlpha: true 
        }
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
const User = sequelize.define("user", {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i
    }
  });
  
Subject.hasMany(Note)
User.hasMany(Subject)
const app = express() 
app.use(bodyParser.json())
app.listen(8080)