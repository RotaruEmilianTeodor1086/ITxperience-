import React from 'react'
import './Sidebar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown,faSearch,faPlus,faStar, faStickyNote,faTrash, faThumbsUp} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <div className="sidebar_profile">
                <div className="profile_icon">
                    A
                </div>
                <div className="profile_title">
                    Claudiu Soare
                    <FontAwesomeIcon className="icon" icon = {faAngleDown} />
                </div>
            </div>
            <div className= "search">
                <div className= "search_block">
                    <FontAwesomeIcon id="iconSearch" icon = {faSearch}/>
                    <input id= "input" placeholder="Cauta"/>
                </div>
            </div>
            <div className= "sidebare_new_note">
                <div className= "create_note_button">                
                <FontAwesomeIcon id="iconAdd" icon={faPlus}/>
                <div className="note_title">
                    <strong>Adauga notita</strong>
                </div>
                </div>
            </div>
            <hr id="horizontalLine"></hr>
            <div className="sidebar_menu">
                 <ul>
                     <li>
                       <FontAwesomeIcon className="iconDummy" icon={faStar}>
                       </FontAwesomeIcon>
                       Exemplu
                     </li>
                     <li>
                       <FontAwesomeIcon className="iconAllNotes" icon={faStickyNote}>
                       </FontAwesomeIcon>
                       Toate notitele
                     </li>
                     <li>
                       <FontAwesomeIcon className="iconTrash" icon={faTrash}>
                       </FontAwesomeIcon>
                       Cos de gunoi
                     </li>
                 </ul>
            </div>
            <hr id="horizontalLine"></hr>
        </div>
        <footer className= "teamName">
            <FontAwesomeIcon className="ItxperienceIcon" icon={faThumbsUp}></FontAwesomeIcon>
                Itxperience
        </footer>
    </div>
  );
}

export default Sidebar;