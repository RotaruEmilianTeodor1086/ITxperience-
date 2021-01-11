import React from 'react'
import './Note.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArchive} from '@fortawesome/free-solid-svg-icons';


function Note() {
  return (
    <div className="EditableNote">
        <div className="EditableNote_Top">
            <div className="EditableNote_Top_Date">Ultima editare la 11 ianuarie,2020</div>
            <div className="EditableNote_Top_Buttons">
                 <div className="action_buttons">
                     <FontAwesomeIcon id="idArchive" icon={faArchive}></FontAwesomeIcon>
                 </div>
            </div>
        </div>
        <div className="EditableNote_Middle">
             <div className="EditableNote_Middle_Top">
                  <input placeholder="Titlu notita"></input>
             </div>
             <div className="EditableNote_Middle_Content">
                  <textarea id="idTextArea" placeholder="Scrie continutul notitei aici..."></textarea>
             </div>
        </div>
    </div>
  );
}

export default Note;