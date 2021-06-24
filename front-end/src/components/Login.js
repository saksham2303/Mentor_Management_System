import './Login.css';
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap';
import AuthContext from './auth/AuthContext';
import { Link } from 'react-router-dom';
function Login(props) {
  const authContext = useContext(AuthContext);
  const { loginData, isAuthenticated } = authContext;

  let token = localStorage.getItem('token')
  useEffect(() =>{
    if(isAuthenticated){
      <Redirect to="Dashboard/home"/>
    }
  },
  [isAuthenticated, props.history])
  const [input, setInput] = useState({
    usertype: "Mentee",
    email: "",
    password: ""
  })

  const {usertype,email,password} = input;
  

function  handleChange(e) {
setInput({
  
    ...input,
    [e.target.name]: e.target.value
  
})
}





function handleClick(e){
  e.preventDefault();
 try {if(!email.includes("jklu.edu.in")){
    alert("Please use JKLU email id")
  }
  else{
    if(password.length<8){
      alert("Check Password")
    }
  loginData ({
    usertype,
    email,
    password
  }).then(()=>{
    window.location.reload()
  })
  
  }
}catch{
  alert("Something went wrong")
}
  // axios.post('http://localhost:6001/create',registerData)
}
  return (
   
    
    <div className="Logic" id="logic">
       {token ? <Redirect to="/Dashboard/home" /> : <Redirect to="/Signin" />}
      <div className="Ups">
      
       <div className="log">
          <div className = "sub sd">
            <br></br>
            <br></br>
            
          <div className="page">
           <b>  <p>Sign in to Account</p></b>
             
             <ReactBootstrap.Form className="from" onSubmit={handleClick}>
             <ReactBootstrap.Form.Group controlId="exampleForm.SelectCustom">
             <div className="selects">
                    <ReactBootstrap.Form.Label>User type</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control as="select"  custom className="select" name="usertype" value={usertype} onChange={handleChange} required>
                      
                      <option>Mentor</option>
                      <option>Mentee</option>
                      
                    </ReactBootstrap.Form.Control>
                    </div>
                  </ReactBootstrap.Form.Group>

                  
                        <ReactBootstrap.Form.Group controlId="formBasicEmail">
                          
                
                
                <div className="input">
                <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control type="text" onChange={handleChange} placeholder="Enter email" name="email" required/>
               
                </div>
                
                
              </ReactBootstrap.Form.Group>
              
              <ReactBootstrap.Form.Group controlId="formBasicPassword">
                
                <div className="input">
                <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange} required/>
                <Link href = "#"  className="forgot">Forgot Password ?</Link>
                <br/>
                </div>

              </ReactBootstrap.Form.Group>
              <div className="input">
              <ReactBootstrap.Button variant="primary"  type="submit" className="button" >
              
    Submit
  </ReactBootstrap.Button>
  
  <Link to = "/Signup" className="button">Don't have an account ?</Link>
  
  </div>
  <br></br>
</ReactBootstrap.Form>

                </div>
          </div>
          <div className="sub hd">
          {/* <img src="Assets/images/question-2519654.svg" /> */}
          <div className="matter">
          <h1>Hello, Friend!</h1>
          <p>Fill up your personal infomation and start
            <br>
         </br>
         your journey with us.
         </p>
         </div>
          </div>

        </div>
        <br>
    </br>
    <br></br>
    <br>
    </br>
    
    </div>
    
    </div>
  )
}

export default Login
