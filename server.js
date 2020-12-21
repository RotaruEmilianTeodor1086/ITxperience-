const express = require('express')
const bodyParser = require('body-parser')
const Sequelize  = require('sequelize')
const sequelize = new Sequelize('notes_app','root','',{

    dialect:'mysql'

})

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
         //   isUnique: sequelize.validateIsUnique('email', 'That email is being used. Please choose a different email address'),
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
      type: Sequelize.DataTypes.TEXT ,   
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: Sequelize.DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i
    }
  });
Subject.hasMany(Note)
User.hasMany(Subject)
const app = express() 
app.use(bodyParser.json())

app.get('/create', async (req,res,next)=>{
    try{
        await sequelize.sync({force: true})

    }
    catch(err){
        next(err) ; 
    }


})
app.get('/user', async(req,res,next)=>{
    try{
        const users = await User.findAll()
        res.status(200).json(users) ; 
    }
    catch(err){
        next(err) ; 
    }

})

app.post('/user', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.get('/user/:uid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.put('/user/:uid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.delete('/user/:uid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})


app.get('/user/:uid/subjects', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.post('/user/:uid/subjects', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.get('/user/:uid/subjects/:sid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.put('/user/:uid/subjects/:sid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.delete('/user/:uid/subjects/:sid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})



app.get('/user/:uid/subjects/:sid/notes', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.post('/user/:uid/subjects/:sid/notes', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.get('/user/:uid/subjects/:sid/notes/:nid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.put('/user/:uid/subjects/:sid/notes/:nid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})

app.delete('/user/:uid/subjects/:sid/notes/:nid', async(req,res,next)=>{
    try{

    }
    catch(err){
        next(err) ; 
    }
})





app.listen(8080)