import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
import './ChatBox.css';
import * as ReactBootstrap from 'react-bootstrap';
import {globalarray, Load_user} from './actions'
function ChatBox() {
    const token = localStorage.getItem('token')
    console.log(token);
    let mentorname = "";
    let menteename = "";
    if(localStorage.getItem('usertype')=="Mentor"){
        menteename = localStorage.getItem('username')
        mentorname = localStorage.getItem('messagementee')
       
    }
    else{
        menteename = localStorage.getItem('username')
        mentorname = localStorage.getItem('mentorname')
    }

    
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
        const change = ({
            color:"red"
        })
      function changecolor(){
         return change
      }

        function addmenteesmessage(info){
            
            localStorage.setItem("messagementee", info)
            console.log("hmm",localStorage.getItem("messagementee"))
            window.location.reload()
        }

        const [inputs, setInputs] = useState({
            // ueryb
            
          
            mentors: localStorage.getItem('username'),
            mentees: localStorage.getItem("messagementee"),
            
            texts: ""
            
    
          })
let name = ""
let t = ""

       
          const {mentors,mentees,texts} = inputs;
       
        function  handleChanges(e) {
        setInputs({
          
            ...inputs,
            [e.target.name]: e.target.value
          
        })
        }
        function handleClicks(e){
          e.preventDefault();
          
           const userinfo  = {
            
            mentees, //sender
            mentors, //receiver
            texts,
            
          }
          axios.post('https://mentor-0.herokuapp.com/texts/chats',userinfo)
          
          console.log(userinfo);
          setTimeout(() => window.location.reload(), 500);
        
        }


        const [peop, setPeop] = useState([]);
        
        useEffect(() =>{
        async function fetchData(){
        const req = await axios.get(`https://mentor-0.herokuapp.com/texts/chats?mentee=${localStorage.getItem('messagementee')}&&mentor=${localStorage.getItem("username")}&&usertype=${localStorage.getItem("usertype")}`);
        
        
        console.log("particular data- ",req.data)
        setPeop(req.data);
        
    
    }
    fetchData();
            },[])


            const [peops, setPeops] = useState([]);
        
            useEffect(() =>{
            async function fetchData(){
            const req = await axios.get('https://mentor-0.herokuapp.com/assigned/assign');
            
            
            console.log("particular data- ",req.data)
            setPeops(req.data);
            
        
        }
        fetchData();
                },[])


        const authlink = (
        
        
                <Fragment>
                    <div className="chat__boxes">
    
                        <div className="chatbox__names">
                            {
                            localStorage.getItem("usertype") == "Mentor" ? 
                            peops.map(pl =>(
                                pl.mentor==localStorage.getItem('username') ?
                                <Link className="Mentees" onClick={() => addmenteesmessage(pl.username)} ><h5>{pl.username}</h5></Link>:
                                null
                            )):
                            peops.map(pl =>(
                            pl.email== localStorage.getItem('useremail') ?
                                <Link className="Mentees" onClick={() => addmenteesmessage(pl.mentor)} ><h5>{pl.mentor}</h5></Link>
                                :
                                null
                            
                            
                            
                            ))
                            
                            }
                        </div>

                        <div className="chatbox__texts">
                                
                               {
                               console.log("this is peop",peop),
                               peop.length>0 ?
                               peop.map(pq =>(
                                   <div className="chat__padding">
                                       <h5>{pq.mentor}</h5>
                                       <p>{pq.text}</p>

                                   </div>
                               )):
                               
                               <div className="chat__padding">
                               
                               <p style={{height:"400px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>No messages</p>

                           </div>
                            }
           
                            
                            <div>
                            
                                    

                            </div>

                        </div>
                       
                        
                        
                        
                    </div>
                    <br/>
                   
                    <ReactBootstrap.Form>
                        <ReactBootstrap.Form.Control as ="textarea" onChange={handleChanges} name="texts" value={texts} placeholder="Typ text here.."></ReactBootstrap.Form.Control> 
                        <ReactBootstrap.Button variant="primary" type="submit" className="button" onClick={handleClicks} >
                  
        Send
      </ReactBootstrap.Button>
                    </ReactBootstrap.Form>
                    




                
                </Fragment>
                
            )
            
        
       

    return (
        
        <div className="chatbox">
           
            {token ? authlink : <Redirect to="/Signup" />}
        </div>
    )
}

export default ChatBox
