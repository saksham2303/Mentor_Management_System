import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './Help.css'
function Help() {
    const token = localStorage.getItem('token')
    console.log(token);
    
    if(token==null){
        <Redirect to="/Signup" />

    }

    const [people, setPeople] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get('https://mentor-0.herokuapp.com/receive/getdata');
    
    
    console.log("data on dahsboard- ",req.data)
    setPeople(req.data);
    

}
fetchData();
        },[token])

        const authlink = (
        
            <Fragment>{localStorage.getItem("usertype")=="Mentor"?
            <div className="mentor">
            {/* <h2>For mentor </h2> */}
            <p>
            <h3>Home page</h3>
            It will show you your name, your number of participants.
           
            <h3>Announcement page</h3>
            You can post the announcements .
            <h3>Discussion page</h3>
            You wolud be able to discuss on the posted discussion by anyone in the group and you can also post a discussion on that forum.
            Upvote facility will also be available their.
            <h3>Notification page</h3>
            Recent posted discussion  notification will be seen from here
            <h3>Chat box</h3>
            You are able to have a personal chat with your mentees.
            
            <h3>Add mentee</h3>
            User can be able to search for the mentee by using some filters and can also add mentee into the portal from here.</p>
            </div>
            :
            <div className="mentor">
                {/* <h2>For mentee</h2> */}
            <p><h3>Home page</h3>
It will show you your name, your mentor name.
<h3>Announcement page</h3>

You can view the announcement posted by your mentor

<h3>Discussion page</h3>
You are able to discuss on the posted discussion by anyone in the group and you can also post a discussion on that forum.
Upvote facility will also be available there.
<h3>Notification page</h3>
Recent posted discussion or announcement's notification will be seen from here
<h3>Chat box</h3>
You are able to have a personal chat with your mentor.
<h3>Update info</h3>
User can be able to update the information related to his account.</p>
</div>

            }
               

            </Fragment>
            
        )
       

    return (
        <div className="help">
            
            {token ? authlink : <Redirect to="/Signup" />}
        </div>
    )
}

export default Help
