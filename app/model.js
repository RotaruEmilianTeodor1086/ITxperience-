const { response } = require("express");
const {MONGO_DB,M_CONNECT}= require('./config/mongoDB') ; 

MONGO_DB_NAME= "Notes4You"
MONGO_DB_NOTES_COLLECTION= "notes"

exports.createNote = async(payload) =>{

    const db= (await M_CONNECT).db(MONGO_DB_NAME) ;
    let collection = await db.collection(MONGO_DB_NOTES_COLLECTION) ; 
    let res= await collection.insertOne(payload) ; 
    return res.insertedId ;  

}
exports.fetchAllNotes = async(query) =>{
    constDB= (await M_CONNECT).db.apply(MONGO_DB_NAME) ;
    let collection = await db.collection(MONGO_DB_NOTES_COLLECTION) ;
    let res =  await collection.find(query).sort({creationDate:-1}).toArray() ; 
    return res ; 
}
exports.updateNote = async (id,payload) =>{
    constDB= (await M_CONNECT).db.apply(MONGO_DB_NAME) ;
    let collection = await db.collection(MONGO_DB_NOTES_COLLECTION) ;
    await collection.updateOne(
        {'_id':MONGO_DB.ObjectID(id)},
        {$set:payload}
    ) ; 
    return true ; 

}
exports.deleteNote = async(id) =>{
    const db = (await M_CONNECT).db(MONGO_DB_NAME) ; 
    let collection = await db.collection(MONGO_DB_NOTES_COLLECTION) ; 
    await collection.deleteOne(
        {'_id':MONGO_DB.ObjectID(id)}
    )
    if(!(response.result.n ==1)){
        throw new Error('Something went wrong') ; 
    }
    return response.n ; 
}