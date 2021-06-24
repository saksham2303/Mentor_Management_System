import React,{useState,useEffect} from 'react'
import { Bar , Pie} from 'react-chartjs-2'
import axios from 'axios'
import { red } from '@material-ui/core/colors';
import * as ReactBootstrap from 'react-bootstrap'
function Graph() {


const [peop, setPeop] = useState([]);
useEffect(() =>{
    async function fetchData(){
      
    const req = await axios.get(`https://mentor-0.herokuapp.com/meetings/details?year=${year}&&name=${localStorage.getItem("username")}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setPeop(req.data);
      

}

fetchData();
        },[])
        const [input, setInput] = useState({
            // ueryb
            
          
            username: localStorage.getItem('username'),
            
            year: localStorage.getItem("yr")
            
        
          })
        
        
         let pk =0;
          const {username,year} = input;
        
        function  handleChange(e) {
        setInput({
          
            ...input,
            [e.target.name]: e.target.value
          
        })
        }
       
        
            function reload(){
                window.location.reload()
            }
        function handleClick(e){
          e.preventDefault();
          
           const userinfo  = {
            
            
            username,
            
            year
          }
          localStorage.setItem("yr", year)
         reload()
        //   window.location.reload();
          
        }
        
        let lab = []
        let values = []
        let values3 = []
        let noofprob = []
        let noofsol = []
        peop.map(p => {
            lab.push(p.problem)
            values.push(p.upvotes)
            values3.push(p.attendance)
            noofprob.push(p.noofproblems)
            noofsol.push(p.noofsolutions)
        })
        let personal = 0
        let academic = 0
        let org = 0
        let other = 0
        peop.map(p => {
            if(p.problemtype == "Personal"){
                personal = personal + 1
            }
            else  if(p.problemtype == "Academic"){
                academic = academic + 1
            }
            else  if(p.problemtype == "Organisation Related"){
                org = org + 1
            }
            else  if(p.problemtype == "Other"){
                other = other + 1
            }
        })
        console.log(lab)
    return (
<div style={{paddingTop:"280px"}} >

<ReactBootstrap.Form >

<ReactBootstrap.Form.Control as="select" 
      onChange={ handleChange } 
      
      className="wonder"
      name = "year"
      value={year} >
   
          
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
       
      </ReactBootstrap.Form.Control>
                         <ReactBootstrap.Button style={{marginBottom:"20px"}} variant="primary" type="submit" className="button" onClick={handleClick} >
                  
        Search
      </ReactBootstrap.Button> 
      
</ReactBootstrap.Form>{lab.length>2?
        <div style={{paddingTop:"80px"}}>
            <div style={{width:"100%",height:"90%"}}>
            <Bar
            data = {{

                labels: lab,
               
                datasets:[
                    {
                        label: "Votes",
                        data: values,
                        backgroundColor: "rgba(255,140,0,0.7)",
                    },
                    {
                        label: "Attendance",
                        data: values3,
                        backgroundColor: "rgb(0,128,0,0.7)",
                    },
                ],
                
            }}
            height = {400}
            width = {1000}
            options = {{
                maintainAspectRatio:false,
                scales: {
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
            />
</div>

            <br></br>
            <br></br>
            <div style={{width:"100%",height:"90%"}}>
            <Pie
            data = {{

                labels: ["Personal", "Academic", "Organisation Related", "Other"],
               
                datasets:[
                    {
                        label: ["Personal", "Academic", "Organisation Related", "Other"],
                        data: [personal,academic,org,other],
                        backgroundColor: ["rgba(255,140,0,0.7)", "rgb(0,128,0,0.7)", "rgb(165,42,42,0.7)", "rgb(255,0,0,0.7)"]
                    },
                    
                ],
                
            }}
            height = {400}
            width = {600}
            
            options = {{
                maintainAspectRatio:false,
                scales: {
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
            />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{width:"100%",height:"400px"}}>
            <Bar
            data = {{

                labels: lab,
               
                datasets:[
                    {
                        label: "No. of Problems per meeting",
                        data: noofprob,
                        backgroundColor: ["rgba(255,140,0,0.7)", "rgb(0,128,0,0.7)", "rgb(165,42,42,0.7)", "rgb(255,0,0,0.7)","rgb(0,255,0,0.7)"],
                    },
                    
                ],
                
            }}
            height = {400}
            width = {1000}
            options = {{
                maintainAspectRatio:false,
                scales: {
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
            />
            <br></br>
            <br></br>
</div>
<br></br>
            <br></br>
            <div style={{width:"100%",height:"400px"}}>
            <Bar
            data = {{

                labels: lab,
               
                datasets:[
                    {
                        label: "No. of Solutions of problems",
                        data: noofsol,
                        backgroundColor: ["rgba(255,140,0,0.7)", "rgb(0,128,0,0.7)", "rgb(165,42,42,0.7)", "rgb(255,0,0,0.7)","rgb(0,255,0,0.7)"],
                    },
                    
                ],
                
            }}
            height = {400}
            width = {1000}
            options = {{
                maintainAspectRatio:false,
                scales: {
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
            />
            <br></br>
            <br></br>
</div>
            
        </div>
        :<h1 style={{color:"black", marginBottom:"50px"}}>Not enough data
       </h1>
    }
        </div>
    )
}

export default Graph
