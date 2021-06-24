import './Signup.css';
// import axios from 'axios';

import React, { useState, useContext, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import AuthContext from './auth/AuthContext';
import {Link ,Redirect } from 'react-router-dom'
function Signup(props) {
  
  const authContext = useContext(AuthContext);
  const {registerData, isAuthenticated} = authContext;
  const token = localStorage.getItem('token');
  useEffect(() =>{
    if(isAuthenticated){
     
      <Redirect to="/Signin" />
    }
  },
  [isAuthenticated, props.history])

const [input, setInput] = useState({
    usertype: "Mentee",
    username: "",
    email: "",
    password: ""
  })

  const {usertype,username,email,password} = input;

function  handleChange(e) {
setInput({
  
    ...input,
    [e.target.name]: e.target.value
  
})
}
function handleClick(e){
  e.preventDefault();
  try
  {if(password.length<7 ){
    alert("Password length should be 8 characters long")
  }
  else if(!email.includes("jklu.edu.in")){
    alert("Please use JKLU email id")
  }

  else{
   registerData ({
    usertype,
    username,
    email,
    password
  })

  alert("Account created please login to continue")
      props.history.push("/Signin")

}}catch(err){
  alert("something went wrong!")

}
  // axios.post('http://localhost:6001/create',registerData)
}
  return (
    
    <div className="Signup">
      {token ? <Redirect to="/Dashboard/home" /> : <Redirect to="/Signup" />}
      <div className="Ups">
      
       <div className="log">
          <div className = "sub sd">
            <br></br>
            <br></br>
            
          <div className="page">
           <b>  <p>Sign up to Begin</p></b>
             
             <ReactBootstrap.Form  className="from" onSubmit={handleClick} >
             <ReactBootstrap.Form.Group controlId="exampleForm.SelectCustom">
             <div className="selects">
                    <ReactBootstrap.Form.Label>User type</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control as="select" custom className="select" 
                    
                    value={usertype} 
                    name="usertype" 
                    onChange={handleChange} 
                    required>
                      
                      <option>Mentor</option>
                      <option>Mentee</option>
                      
                    </ReactBootstrap.Form.Control>
                    </div>
                  </ReactBootstrap.Form.Group>

                   <ReactBootstrap.Form.Group controlId="formBasicUsername">
                          
                          
                          
                          <div className="input">
                          <ReactBootstrap.Form.Label>Username</ReactBootstrap.Form.Label>
                          <ReactBootstrap.Form.Control 
                          onChange={ handleChange } 
                          value={username} 
                          
                          type="text" 
                          placeholder="Username" 
                          name="username"
                          required/>
          
                          </div>
                         
                        </ReactBootstrap.Form.Group> 
                        <ReactBootstrap.Form.Group controlId="formBasicEmail">
                          
                
                
                <div className="input">
                <ReactBootstrap.Form.Label >Email address</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control 
                onChange={handleChange} 
                type="text" 
                value={email} 
                
                placeholder="Enter email" 
                name="email" 
                required/>
                <ReactBootstrap.Form.Text className="text-muted">
                  We'll share your email with your Mentor.
                </ReactBootstrap.Form.Text>
                </div>
                
                
              </ReactBootstrap.Form.Group>
              
              <ReactBootstrap.Form.Group controlId="formBasicPassword">
                
                <div className="input">
                <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control 
                onChange={handleChange} 
                type="password" 
                value={password}
                
                placeholder="Password" 
                name="password"
                required/>
                 <ReactBootstrap.Form.Text className="text-muted">
                  Min length 8 Characters
                </ReactBootstrap.Form.Text>
                </div>

              </ReactBootstrap.Form.Group>
              <div className="input">
              <ReactBootstrap.Button variant="primary" 
              type="submit" 
              className="button" 
              >

              
    Submit
  </ReactBootstrap.Button> 
    <Link to = "/Signin" className="button" >Already have an account ?</Link>
  
  
  <br></br>
  </div>
  
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
       
    </div>
    </div>
  )
}

export default Signup
