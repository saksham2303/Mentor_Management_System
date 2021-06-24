import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css';

function Sidebar() {
   
    
    
    return (
        <div className ="sidebar">
             {localStorage.getItem('usertype') == "Mentor" ?
              <div id="content-sidebar" className="bg-danger">
              <Link to="/Dashboard/home">Home</Link>
              <Link to="/Dashboard/discussion">Discussion</Link>
              <Link to="/Dashboard/announcements">Announcements</Link>
              <Link to="/Dashboard/help">Help</Link>
              <Link to="/Dashboard/addmentee">Add Mentee</Link>
              <Link to="/Dashboard/addmeetingdetail">Add Meeting Details</Link>
              <Link to="/Dashboard/chatbox">Chatbox</Link>
            <br/>
              
              
             

          </div>
          :
           <div id="content-sidebar" className="bg-danger">
           <Link to="/Dashboard/home">Home</Link>
           <Link to="/Dashboard/discussion">Discussion</Link>
           <Link to="/Dashboard/announcements">Announcements</Link>
           <Link to="/Dashboard/help">Help</Link>
           <Link to="/Dashboard/editinfo">Add/Edit info</Link>
           <Link to="/Dashboard/chatbox">Chatbox</Link>
           
          

       </div>


            }
           
            
        </div>
    )
}

export default Sidebar
