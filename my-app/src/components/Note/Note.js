import React, { useContext, useEffect, useState } from 'react'
import './Note.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import{useLocation , useParams,useHistory}from "react-router-dom" ; 
import { postRequest, putRequest } from '../../util/apiRequests';
import { BASE_URL,CREATE_NOTE, UPDATE_NOTE} from '../../util/apiEndpoints';
import { NotesContext } from '../../context/context';

const Note=()=> {
  const history = useHistory();
  const location = useLocation() ; 
  const params = useParams() ; 
  const[title,setTitle] = useState('') ; 
  const[description,setDescription]= useState('') ; 
  const[updatedDate,setupdatedDate]= useState('') ; 
  const[isArchhive,setIsArchive] = useState(0) ; 
  const[error,setError] = useState(null) ; 
  const notesContext= useContext(NotesContext) ; 
  const idBun = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1) ;
  console.log(idBun) ;  

  useEffect(() => {
    if (location.note) {
        setTitle(location.note.title)
        setDescription(location.note.description)
        setupdatedDate(location.note.updatedDate)
        setIsArchive(location.note.archive)
    }
}, [location.note])
  useEffect(()=>{
    if(notesContext.notesState.length > 0){
      const [selectednote] = notesContext.notesState.filter((e) => e._id === idBun);
      if(selectednote){
        setTitle(selectednote.title)
        setDescription(selectednote.description); 
        setupdatedDate(selectednote.updatedDate) ; 
        setIsArchive(selectednote.archive) ; 
  
      }}},[notesContext.notesState])
    const hanlerTitleChange= (e)=>{
        setTitle(e.target.value); 
    }
    const hanlerDescriptionChange= (e)=>{
      setDescription(e.target.value) ; 
      
    }
    const handlerUpdateNote= async(key)=>{
      let query = {} ; 
      if(key == 'title'){
        query['title'] = title ; 

      } else if(key=='description'){
        query['description'] = description ;        
      }
      const response = await putRequest(`${BASE_URL}${UPDATE_NOTE}${idBun}`,query) ; 
      if(response.error){
        setError(response.error) ; 
        return false ; 
      }
      notesContext.notesDispatch({ type: 'updateNoteSuccess', payload: response, id:idBun})
      
    }
  return (
    <div className="EditableNote">
        <div className="EditableNote_Top">
            <div className="EditableNote_Top_Date">Ultima editare la {updatedDate}</div>
            <div className="EditableNote_Top_Buttons">
                 <div className="action_buttons">
                     <FontAwesomeIcon id="idArchive" icon={faArchive}></FontAwesomeIcon>
                 </div>
            </div>
        </div>
        <div className="EditableNote_Middle">
             <div className="EditableNote_Middle_Top">
                  <input value={title} placeholder="Titlu notita" onChange={hanlerTitleChange} onBlur={() => handlerUpdateNote('title')}></input>
             </div>
             <div className="EditableNote_Middle_Content">
                  <textarea value={description} id="idTextArea" onChange={hanlerDescriptionChange} onBlur={() => handlerUpdateNote('description')}
                   placeholder="Scrie continutul notitei aici..."></textarea>
             </div>
        </div>
    </div>
  );
}

export default Note;