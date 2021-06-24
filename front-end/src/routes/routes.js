import React from 'react'
import {Switch , Route, Redirect} from 'react-router-dom';
import GetStarted from '../components/GetStarted';
import Login from '../components/Login';
import Signup from '../components/Signup';
import HDashboard from '../components/HomeDashboard';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Details from '../components/Addmeetingdetail';

function Routes() {
    return (
        <Switch>
                <Route path ="/" exact component={GetStarted} />
                <Route path ="/Signin" component={Login} />
                <Route path ="/Signup" exact component={Signup} />
                
                <Route path ="/Dashboard/home" exact component={HDashboard} />
                <Route path ="/Dashboard/help" exact component={HDashboard} />
                <Route path ="/Dashboard/discussion" exact component={HDashboard} />
                <Route path ="/Dashboard/announcements" exact component={HDashboard} />
                <Route path ="/Dashboard/editinfo" exact component={HDashboard} />
                <Route path ="/Dashboard/addmentee" exact component={HDashboard} />
                <Route path ="/Dashboard/chatbox" exact component={HDashboard} />
                <Route path ="/Dashboard/addmeetingdetail" exact component={HDashboard} />                
                <Redirect to =  "/" />
                


        </Switch>
    )
}

export default Routes
