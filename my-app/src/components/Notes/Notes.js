import React,{useContext, useEffect, useReducer, useState} from 'react'
import './Notes.css';
import{useRouteMatch, useHistory} from "react-router-dom"
import { GET_ALL_NOTES,BASE_URL,GET_TRASH_NOTES } from '../../util/apiEndpoints';
import { getRequest } from '../../util/apiRequests';
import { NotesContext } from '../../context/context';

const Notes = (props) =>{
     const[error,setError] = useState(null) ; 
     const notesContext = useContext(NotesContext) ; 
     const {title} = props ; 
     const history = useHistory() ; 
     const match = useRouteMatch() ; 
     useEffect(()=>{
          getNotes() ; 

     },[match.url])

     const getNotes = async()=>{
          let endpoint = '' ; 
          if(match.url =='/all-notes'){
               endpoint = GET_ALL_NOTES
          }else if(match.url =='./trash' ){
               endpoint= GET_TRASH_NOTES ; 

          }else{
               return; 
          }
          const response = await getRequest(`${BASE_URL}${endpoint}`) ; 
  
          if(response.error){
               setError(response.error) ; 
               return false ; 

          }

          if(response.length >0){

               notesContext.notesDispatch({type:'getAllNotesSuccess',paylod: response}) ; 
               history.push({
                   pathname:`/all-notes/${response._id}`,
                   note:response
               })
          }
     }

  return (
    <div className="AllTheNotes">
         <div className="TopNotesList">
              <div className="TopNotesListTitle">
                  {title}
              </div>
              <div className="TopNotesListTitle2">
                  <div className="TopNotesListNumber">
                   {notesContext.notesState.length} notite
                  </div>
              </div>
         </div>
         <div class="MiddleNotesList">
              <div class="MiddleNotesListPreview">
                   <div class="MiddleNotesListPreviewHead">
                        <div class="MiddleNotesListPreviewHead_NoteTitle">Test la Android</div>
                        <div class="MiddleNotesListPreviewHead_NoteDescription">Descrierea testului</div>
                   </div>
                   <div class="MiddleNotesListPreviewBottom_Date">11.01.2020</div>
              </div>
         </div>

    </div>
  );
}

export default Notes;