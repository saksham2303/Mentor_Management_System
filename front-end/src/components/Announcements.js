import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import './Announcements.css';
import * as ReactBootstrap from 'react-bootstrap';
function Announcements() {
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

        const [input, setInput] = useState({
            // ueryb
            
          
            username: localStorage.getItem('username'),
            text: "",
            
            year: ""
            
    
          })


         
          const {username,text,year} = input;
        
        function  handleChange(e) {
        setInput({
          
            ...input,
            [e.target.name]: e.target.value
          
        })
        }
        function handleClick(e){
          e.preventDefault();
          
           const userinfo  = {
            
            
            username,
            text,
           
            year
          }
          axios.post('https://mentor-0.herokuapp.com/textinfos/texts',userinfo)
          
          console.log(userinfo);
          setTimeout(() => window.location.reload(), 500);
        }


        const [peop, setPeop] = useState([]);
    
        useEffect(() =>{
        async function fetchData(){
        const req = await axios.get('https://mentor-0.herokuapp.com/textinfos/texts');
        
        
        console.log("data on dahsboard- ",req.data)
        setPeop(req.data);
        
    
    }
    fetchData();
            },[])

        const authlink = (
        
           
        
                <Fragment>
                    
                    <div className="view__announcements">
    
                         {localStorage.getItem('usertype') =="Mentee" ?
                         peop.length>0 ? 
                        peop.map(p => (
                            
                            <div>
                        
                            
                            <h5 style={{color:"blue"}}>{p.username==localStorage.getItem('mentorname') ? p.username : ""}</h5>
                            <p>{p.username==localStorage.getItem('mentorname') ? p.text : null}</p>
                            </div>
                           
                            
                        )):
                        <div style={{height:"400px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>
                        
                            
                            
                            <p>No announcements yet</p>
                            </div>
                        
                        :
                        
                        peop.map(p => (
                            
                            <div>
                            
                            
                            <h5 style={{color:"blue"}}>{p.username == localStorage.getItem('username') ? p.username : ""}</h5>
                            <p>{p.username == localStorage.getItem('username')  ? p.text : null}</p>
                            </div>
                            
                        ))
                    
                    
                    } 
                       
                        
                        
                        
                    </div>
                    <br/>
                    {localStorage.getItem('usertype') == "Mentor" ?
                    <ReactBootstrap.Form>
                        <ReactBootstrap.Form.Control as ="textarea" onChange={handleChange} name="text" value={text} placeholder="Typ text here.."></ReactBootstrap.Form.Control> <ReactBootstrap.Form.Control as="select" 
      onChange={ handleChange } 
      
      className="wonder"
      name = "year"
      value={year} 
      defaultValue="Choose...">
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
       
      </ReactBootstrap.Form.Control>
                        <ReactBootstrap.Button variant="primary" type="submit" className="button" onClick={handleClick} >
                  
        Post
      </ReactBootstrap.Button>
                    </ReactBootstrap.Form>:


null


                }
                </Fragment>
                
            )
            
        
       

    return (
        <div className="announcements">
            
            {token ? authlink : <Redirect to="/Signup" />}
        </div>
    )
}

export default Announcements
