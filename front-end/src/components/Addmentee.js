import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './Addmentee.css'
import * as ReactBootstrap from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Addmentee() {

    const [data, setdata] = useState([]);
    
    useEffect(() =>{
        async function fetchData(){
            const req = await axios.get('https://mentor-0.herokuapp.com/addinfo/search');
            
            setdata(req.data);
            console.log(req.data);
        
        }
        fetchData();
                },[])



                const [input, setInput] = useState({
                    // ueryb
                    
                  
                    year: "1st",
                    branch: "CSE",
                    rollnumbers:""
                    
            
                  })
        
        
                 
                  const {year,branch, rollnumbers} = input;
                
                function  handleChange(e) {
                setInput({
                  
                    ...input,
                    [e.target.name]: e.target.value
                  
                })
                }
                function handleClick(e){
                  e.preventDefault();
                  
                   const userinfo  = {
                    
                    
                    year,
                    branch,
                    rollnumbers
                  }
                  axios.post('https://mentor-0.herokuapp.com/addinfo/search',userinfo)
                  setTimeout(() => window.location.reload(), 500);
                  console.log(userinfo);
                }
                // I am the begining I am the end






                
      
      
               
               
              
              
              // function handleClicks(e){
              //   // e.preventDefault();
                
              //   //  const userinf  = {
                
                  
              //   //   username,
              //   //   email,
              //   //   rollnumber,
              //   //   years,
              //   //   branches,
              //   //   mentor
              //   // }iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
              //   // axios.post('http://localhost:6001/assigned/assign',userinf)
                
              //   // console.log("mentorr",userinf);
              //   // localStorage.removeItem('menteeusername')
              //   alert(document.getElementById("mytable").rows[1].cells[3].innerHTML)
              
              // }
function admentee(usn,eml,roln,yr,bran){


  
            try   { const username = usn
                const email = eml
                const rollnumber = roln
                const years = yr
                const branches = bran
                const mentor = localStorage.getItem('username')
                
                
                const userinf  = {
                  
                  
                  username,
                  email,
                  rollnumber,
                  years,
                  branches,
                  mentor
                }
                console.log(userinf)
                axios.post('https://mentor-0.herokuapp.com/assigned/assign',userinf)
                alert("mentee added successfully")
                setTimeout(() => window.location.reload(), 500);
                
                }
                catch(err){
                   alert("something went wrong")
                }

                
}
            //   const arrayofmentees = [];
            //   function GetCellValues() {
            //     var table = document.getElementById('mytable');
            //     for (var r = 1, n = table.rows.length; r < n; r++) {
            //         for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            //             arrayofmentees.push(table.rows[r].cells[c].innerHTML);
            //         }
            //     }
            //     console.log(arrayofmentees);
            //     console.log("email",document.getElementById('em').innerHTML)
            //     const username = arrayofmentees[0]
            //     const email = arrayofmentees[1]
            //     const rollnumber = arrayofmentees[2]
            //     const years = arrayofmentees[3]
            //     const branches = arrayofmentees[4]
            //     const mentor = localStorage.getItem("username")
                
                
            //     const userinf  = {
                  
                  
            //       username,
            //       email,
            //       rollnumber,
            //       years,
            //       branches,
            //       mentor
            //     }
            //     console.log("before-post",userinf);
            //     axios.post('http://localhost:6001/assigned/assign',userinf)
            // }

            // console.log(arrayofmentees);

            const [dataset, setdataset] = useState([]);
    
    useEffect(() =>{
        async function fetchData(){
            const req = await axios.get('https://mentor-0.herokuapp.com/assigned/assign');
            
            setdataset(req.data);
            console.log(req.data);
        
        }
        fetchData();
                },[])


      let listofnames = []
      dataset.map(data =>{
        listofnames.push(data.email)
      })
      console.log(listofnames)

    return (
        <div className="addmentee">
            
            <ReactBootstrap.Form className="filterform">
                
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

    <pre>        </pre><ReactBootstrap.Form.Group as="Col" controlId="formGridState">

    <ReactBootstrap.Form.Label>Roll number</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control 
    placeholder="2018btechcse114"
    onChange={ handleChange } 
    name="rollnumbers"
    value={rollnumbers} 
    />
    </ReactBootstrap.Form.Group>
  </ReactBootstrap.Form.Row>
  <ReactBootstrap.Button 
  variant="primary"
  className="btns"
  onClick={handleClick}
   type="submit">
    Submit
  </ReactBootstrap.Button>

            </ReactBootstrap.Form>
            <br></br>
                
                    <ReactBootstrap.Table striped bordered hover id="mytable">
                    <thead>
                    <tr >
                      
                      <th>Username</th>
                      <th>Email</th>
                      <th>Roll no</th>
                      <th>Year</th>
                      <th>Branch</th>
                      <th>Add Mentee</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map(datas => (
                    data ? 
                    <tr>
                      
                      <td id="un">{datas.username}</td>
                      <td id="em" >{datas.email}</td>
                      <td id="rn"  >{datas.rollnumber}</td>
                      <td id="yr" >{datas.year}</td>
                      <td id="bh" >{datas.branch}</td>
                      {listofnames.includes(datas.email) ? 
                      
                      <center><Link>Already Added</Link></center>
                    
                    : <center><Link  style={{color:"blue"}}
                     onClick={() =>
 admentee(datas.username,datas.email,datas.rollnumber,datas.year,datas.branch)}>Add</Link></center>
                    
                    
                    }
                      
                      
                      
                    </tr>
                    : <h1>No data found</h1>
                     ))}
                    
                  </tbody>
                  </ReactBootstrap.Table>
               
  

        </div>
    )
}

export default Addmentee
