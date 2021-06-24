import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import AuthContext from './auth/AuthContext';

function Dashboard(props) {
   
    // console.log(user)
    const token = localStorage.getItem('token')
    console.log(token);
    function autologout(){
        localStorage.removeItem('token')
        window.location.reload()
    }
    if(token==null){
        <Redirect to="/Signup" />
    }
    const logoutuser = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('useremail');
        localStorage.removeItem('usertype');
        localStorage.removeItem('messagementee');
        localStorage.removeItem('mentorname');
        
       window.location.href = "https://ment0rr.herokuapp.com/Signin"

        
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
        
        <Fragment>
            <div className="dashboard__name">
                    
                        {people.map((person =>( 
                            !person ? autologout():
                            localStorage.setItem('usertype', person.usertype),
                            localStorage.setItem('username',person.username),
                            localStorage.setItem('useremail',person.email)
                            
                            ,
                    <Link to="/Dashboard">
                        {person!=null ?  person.username : <Redirect to="/Signup" />}
                        
                    </Link>
                    

               
               )))}

                        
                        
                    
                    

                
                <Link to="/Signin" onClick = {logoutuser}>
                    Logout
                    
                </Link>

           
           
            </div>
        </Fragment>
        
    )

    const unauthlink = (
        <Fragment>
            <div className="dashboard__name">
                    <Link to="/Signin">
                    Not found
                    </Link>
                   
            </div>
        </Fragment>
    )

    
    return (

       
        <div className="navbar__position">
        
        <ReactBootstrap.Navbar  collapseOnSelect expand="lg" bg="danger" variant="dark" className="dashboard navbar-customm">
            <div className="dashboard__control" style={{position:"sticky"}}>
                <div className="dashboard__title">
                    <Link to="/Dashboard/home" > <img src="/Assets/images/1.png" style={{width:"150px"}} /></Link>
                   

                </div>
                    {token ? authlink : <Redirect to="/Signin" />}
            
            </div>
            
</ReactBootstrap.Navbar>
</div>
        
    )
}

export default Dashboard
