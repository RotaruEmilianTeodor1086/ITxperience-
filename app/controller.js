const{createNote,fetchAllNotes,updateNote,deleteNote}= require('./model'); 
const {getTime}= require('./helper') ;
exports.createNewNote= async(req,res)=>{
try{

    let currentTime = getTime() ;  
    let newNote= {
        title: 'Untitled',
        description:'',
        creationDate: currentTime,
        updatedDate: currentTime,
        archive:0
    };
    let id = await createNote(newNote) ;
    newNote['_id'] = id ; 
    res.status(200).send(newNote) ; 

}
catch(err){

    res.status(400).send(err.message) ; 
}
}

exports.getAllNotes = async(req,res) =>{
    try{
        let query = {
            archive:0
        } ; 
        if(req.params.type=='trash'){
            query.archive=1 ; 
        }
        let data = await fetchAllNotes(query) ; 
        res.status(200).send(data) ; 
    }
    catch(err){
        res.status(400).send(err.message) ; 
    }
}
exports.updateNoteById = async (req,res) =>{
    try{
        let currentTime= getTime() ; 
        let query={
            ...req.body,
            updatedDate: currentTime
        }
        await this.updateNoteById(req.params.id,query) ; 
        req.status(200).send(query)

    }
    catch(err){
        res.status(400).send(err.message) ; 
    }
}
exports.deleteNote = async(req,res) =>{
    try{
        await this.deleteNote(req.params.id) ; 
        res.status(200).send(req.params.id) ; 
    }
    catch(err){
        res.status(400).send(err.message) ; 
    }
}