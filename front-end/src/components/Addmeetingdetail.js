import React, {useState,useEffect,Fragment} from 'react'

import './Addmeetingdetail.css'
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
function Addmeetingdetail() {
    let token = localStorage.getItem('token')
    const [input, setInput] = useState({
        problem:"",
        agree: 0,
        solved:"Yes",
        type:"Personal",
        year:"3rd",
        branch:"CSE",
        attendance:0,
        strength:0,
        noproblems:0,
        nosolutions:0

    })
    const {problem,agree,solved,type,year,branch,attendance,strength,noproblems,nosolutions} = input
    const mentor = localStorage.getItem("username")
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleClick(e){
        e.preventDefault()

       try {const meetingdetails = {
            problem,
            agree,
            solved,
            type,
            branch,
            year,
            attendance,
            strength,
            noproblems,
            nosolutions,
            mentor
        }
        console.log(meetingdetails)
        axios.post("https://mentor-0.herokuapp.com/meetings/details",meetingdetails)
        alert("Meeting details added successfully")
        setTimeout(() => window.location.reload(), 500);

        }catch(err){
          alert("Something went wrong please try again")
          setTimeout(() => window.location.reload(), 500);
        }

    }
    const authlink = (
            
        
        <Fragment>
           
            <ReactBootstrap.Form className="editinfo" width="900px">

            <div className="form-style">
              <div className="doit">
  <ReactBootstrap.Form.Label>Problem</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  
  placeholder="Enter Problem Topic"
  onChange={ handleChange } 
  name ="problem"
  value={problem}  
  style={{width:"270px"}}
  
  />
            


            <br></br>
  <ReactBootstrap.Form.Label>Problem Upvotes</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  
  onChange={ handleChange } 
  name ="agree"
  value={agree} 
  placeholder="No."
  style={{width:"270px"}}
  />


<br></br>
<ReactBootstrap.Form.Label>Attendace</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  
  placeholder="Attendance"
  onChange={ handleChange } 
  name ="attendance"
  value={attendance}  
  style={{width:"270px"}}
  
  />
  
            

</div>
<div className="doit">
<ReactBootstrap.Form.Label>Strength</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  
  placeholder="Total Strength"
  onChange={ handleChange } 
  name ="strength"
  value={strength}  
  style={{width:"270px"}}
  
  />
            





            <br></br>
<ReactBootstrap.Form.Row>


<ReactBootstrap.Form.Group as="Col" controlId="formGridState" style={{marginRight:"10px"}}>
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


<ReactBootstrap.Form.Group as="Col" controlId="formGridState">
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
<ReactBootstrap.Form.Label style={{marginTop:"8px"}}>No of Problems</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  
  placeholder="No. of Problems"
  onChange={ handleChange } 
  name ="noproblems"
  value={noproblems}  
  style={{width:"270px"}}
  
  />
</div>
<div className="doit">
<ReactBootstrap.Form.Row>
<ReactBootstrap.Form.Group as="Col" controlId="formGridState">
  <ReactBootstrap.Form.Label>Problem Solved</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control as="select" 
  onChange={ handleChange } 
  name = "solved"
  value={solved}
  style={{width:"240px"}} 
  
  defaultValue="Choose...">
    <option>Yes</option>
    <option>No</option>
    <option>Need More Discussion</option>
    
    
  </ReactBootstrap.Form.Control>
</ReactBootstrap.Form.Group>

</ReactBootstrap.Form.Row>

<ReactBootstrap.Form.Row>
<ReactBootstrap.Form.Group as="Col" controlId="formGridState">
  
  
  <ReactBootstrap.Form.Label style={{marginTop:"5px"}} >Problem Type</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control as="select" 
  onChange={ handleChange } 
  name = "type"
  value={type}
  style={{width:"240px"}} 
  
  defaultValue="Choose...">
    <option>Personal</option>
    <option>Academic</option>
    <option>Organisation Related</option>
    <option>Other</option>
    
    
  </ReactBootstrap.Form.Control>
  
</ReactBootstrap.Form.Group>

</ReactBootstrap.Form.Row>
<ReactBootstrap.Form.Row>
<ReactBootstrap.Form.Group as="Col" style={{marginTop:"2px"}} controlId="formGridState">
<ReactBootstrap.Form.Label style={{marginTop:"8px"}}>No of Solutions</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  
  placeholder="No. of Problems"
  onChange={ handleChange } 
  name ="nosolutions"
  value={nosolutions}  
  style={{width:"240px"}}
  
  />
</ReactBootstrap.Form.Group>

</ReactBootstrap.Form.Row>
</div>
<ReactBootstrap.Form.Group id="formGridCheckbox">
<ReactBootstrap.Form.Check type="checkbox" label="Confirm" />
</ReactBootstrap.Form.Group>

<ReactBootstrap.Button 
variant="primary"
onClick={handleClick}
type="submit">
Submit
</ReactBootstrap.Button>
</div>
</ReactBootstrap.Form>

        </Fragment>
        
    )
    return (
        <div className="details" style={{width:"1200px"}}>
            {token ? authlink : null}
        </div>
    )
}

export default Addmeetingdetail
