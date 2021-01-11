import React, { useEffect, useState } from 'react'
import './Note.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import{useLocation}from "react-router-dom" ; 


const Note=()=> {
  const location = useLocation() ; 
  const[title,setTitle] = useState('') ; 
  const[description,setDescription]= useState('') ; 
  const[updatedDate,setupdatedDate]= useState('') ; 
  const[isArchhive,setIsArchive] = useState(0) ; 

  useEffect(()=>{
    if(location.note){
      setTitle(location.note.title)
      setDescription(location.note.description); 
      setupdatedDate(location.note.updatedDate) ; 
      setIsArchive(location.note.archive) ; 

    }

  },[location.note])
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
                  <input value={title} placeholder="Titlu notita"></input>
             </div>
             <div className="EditableNote_Middle_Content">
                  <textarea value={description} id="idTextArea" placeholder="Scrie continutul notitei aici..."></textarea>
             </div>
        </div>
    </div>
  );
}

export default Note;