import React from 'react'
import './Sidebar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown,faSearch} from '@fortawesome/free-solid-svg-icons'

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
                    <FontAwesomeIcon icon = {faSearch}/>
                    <input placeholder="Cauta"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;