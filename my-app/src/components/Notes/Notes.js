import React from 'react'
import './Notes.css';

function Notes() {
  return (
    <div className="AllTheNotes">
         <div className="TopNotesList">
              <div className="TopNotesListTitle">
                  Toate notitele
              </div>
              <div className="TopNotesListTitle2">
                  <div className="TopNotesListNumber">
                   3 notite
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