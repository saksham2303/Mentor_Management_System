import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Graph from './Graph'
import RecentDiscussion from './RecentDiscussion';
function Home() {
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




        const [peoples, setPeoples] = useState([]);
    
        useEffect(() =>{
        async function fetchData(){
        const reqs = await axios.get(`https://mentor-0.herokuapp.com/assigned/assign`);
        
        
        // console.log("data of mentor- ",reqs.data)
        setPeoples(reqs.data);
        
    
    }

    
    fetchData();
            },[])
            console.log("yoyoyoy", localStorage.getItem('useremail'))
            peoples.map(peop =>{
               if(peop.email==localStorage.getItem('useremail')){
                   localStorage.setItem('mentorname', peop.mentor);
                   localStorage.setItem('menteeyear', peop.years);
                  
               }
               
            })
            let participants = 0;
            peoples.map(peop =>{
                if(peop.mentor==localStorage.getItem('username')){
                    participants = participants + 1;
                   
                }
                
             })
            console.log("The mentor is:", localStorage.getItem('mentorname'))


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
                listofnames.push(data.username)
              })
            //   console.log(listofnames)
        
        const authlink = (
        
            <Fragment>
               {people.map(person => (
                   <div className="user__details">
                       <div id="user__name" className="bg-primary">
                           <h2>Username</h2>
                           <h2>{person.username}</h2>
                       </div>
                       <div  id= "user__type" className="bg-danger">
                            <h2>Usertype</h2>
                           <h2>{person.usertype}</h2>
                       </div>
                    {(person.usertype == "Mentee") ? <div id="user__mentor" className="bg-warning"> 
                            <h2>Mentor</h2>
                            {localStorage.getItem('mentorname')!=null
                            ?
                            <h2>{localStorage.getItem('mentorname')}</h2>
                            :
                            <h2>No mentor yet</h2>
                            }
                           
                       </div> : 
                       <div id="user__mentor" className="bg-warning"> 
                            <h2>Participants</h2>
                           <h2>{participants}</h2>
                       </div> 
                       
                       
                       
                       }   


                   </div>
                   
               ))}
                <br></br>
                <RecentDiscussion />
               {localStorage.getItem('usertype')== "Mentor" ? <Graph /> : null}
               
               <br></br>
            </Fragment>
            
        )
       

    return (
        <div className="home">
            
            {token ? authlink : <Redirect to="/Signup" />}
        </div>
    )
}

export default Home
