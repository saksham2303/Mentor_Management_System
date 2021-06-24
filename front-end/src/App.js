import './App.css';
import React from 'react';
import {Router } from 'react-router-dom';
import Routes from './routes/routes';
import history from './services/history';
import UserAuth from './components/auth/AuthState';
import AuthToken from './components/auth/tokenAuth';
import Sidebar from './components/Sidebar';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

  if(localStorage.token){
      AuthToken(localStorage.token);
      
  }
  else{
    console.log("no token app.js")
  }
 
function App() {
  
  return (
    <UserAuth>
     <Router history={history}>
         <Routes />
        
    </Router>
    </UserAuth>
     
    
  )
}

export default App