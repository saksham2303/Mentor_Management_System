import React, {useContext, useEffect, Fragment} from 'react';
import {BrowserRouter , Switch, Route, Redirect} from 'react-router-dom';

// import {Link} from 'react-router-dom';
import './MentorDashboard.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import SwitchComponent from './SwitchCompionent';


function MentorDashboard() {
   const token = localStorage.getItem('token')
    if(!token){
        <Redirect to="Signin" />
    }
    const authlink = (
        
        <Fragment>
            <BrowserRouter>
        <div>
        
            <Dashboard  style={{position:"fixed"}}/>
            <div className="dashboard-contents">
            <Sidebar />
            <div>
                <SwitchComponent />
            
               
            </div>
            </div>
            
        </div>
        
        </BrowserRouter>
        </Fragment>
        
    )
    
    
    return (
        <div>


        {token ? authlink : <Redirect to="/Signup" />}
        </div>
        
        
    )
}

export default MentorDashboard
