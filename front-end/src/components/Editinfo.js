import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';

import axios from 'axios';
import './Editinfo.css'
function Editinfo() {
    
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

        people.map(person =>{
          localStorage.setItem('username', person.username)
          localStorage.setItem('email', person.email)
        })
        const name =localStorage.getItem('username')
        const em = localStorage.getItem('useremail')

        
        const [input, setInput] = useState({
            // ueryb
            
            username: name,
            email: em,
            rollnumber: "",
            year: "1st",
            branch: "CSE"
            
    
          })


         
          const {username,email,rollnumber,year,branch} = input;
        
        function  handleChange(e) {
        setInput({
          
            ...input,
            [e.target.name]: e.target.value
          
        })
        }
        function handleClick(e){
          e.preventDefault();
          
          try {const userinfo  = {
            
            username,
            email,
            rollnumber,
            year,
            branch
          }
    
          axios.post('https://mentor-0.herokuapp.com/addinfo',userinfo)
          alert("Details added Successfully!");
          
        
        }catch(err){
          alert("something went wrong please try again")
        }
        
        //   alert("Account created please login to continue")
        //       props.history.push("/Signin")
        
          
          
        }
       
        const authlink = (
            
        
            <Fragment>
               {people.map((person =>( 
                <ReactBootstrap.Form className="editinfo">
  
                
      <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>
      <ReactBootstrap.Form.Control 
      type="email" 
      
      placeholder="Enter email"
      onChange={ handleChange } 
      name ="email"
      value={email}  
      style={{width:"270px"}}
      
      />
                
<br />

   
      <ReactBootstrap.Form.Label>Username</ReactBootstrap.Form.Label>
      <ReactBootstrap.Form.Control 
      type="text" 
      
      onChange={ handleChange } 
      name ="username"
      value={username} 
      placeholder="Username"
     
      />
    
  
<br />
  <ReactBootstrap.Form.Group controlId="formGridAddress1">
    <ReactBootstrap.Form.Label>Roll number</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control 
    placeholder="Example - 2018btechcse114"
    onChange={ handleChange } 
    name="rollnumber"
    value={rollnumber} 
    />
  </ReactBootstrap.Form.Group>

  

  <ReactBootstrap.Form.Row>
    

  <pre> </pre> <ReactBootstrap.Form.Group as="Col" controlId="formGridState">
      <ReactBootstrap.Form.Label>Branch</ReactBootstrap.Form.Label>
      <ReactBootstrap.Form.Control as="select" 
      onChange={ handleChange } 
      name = "branch"
      value={branch} 
      
      defaultValue="Choose...">
        <option>CSE</option>
        <option>CSE BDA</option>
        <option>Mechanical</option>
        <option>Electrical</option>
        <option>Civil</option>
        
      </ReactBootstrap.Form.Control>
    </ReactBootstrap.Form.Group>


    <pre>        </pre><ReactBootstrap.Form.Group as="Col" controlId="formGridState">
      <ReactBootstrap.Form.Label>Year</ReactBootstrap.Form.Label>
      <ReactBootstrap.Form.Control as="select" 
      onChange={ handleChange } 
      name = "year"
      value={year} 
      defaultValue="Choose...">
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
      </ReactBootstrap.Form.Control>
    </ReactBootstrap.Form.Group>

    
  </ReactBootstrap.Form.Row>

  <ReactBootstrap.Form.Group id="formGridCheckbox">
    <ReactBootstrap.Form.Check type="checkbox" label="Confirm" />
  </ReactBootstrap.Form.Group>

  <ReactBootstrap.Button 
  variant="primary"
  onClick={handleClick}
   type="submit">
    Submit
  </ReactBootstrap.Button>
</ReactBootstrap.Form>
)))}
            </Fragment>
            
        )


       

    return (
      
        <div className="editinfo">
            
            {token ? authlink : <Redirect to="/Signup" />}
        </div>
    )
}

export default Editinfo
