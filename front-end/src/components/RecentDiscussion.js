import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./RecentDiscussion.css"
import {Link} from 'react-router-dom'

function RecentDiscussion() {
    const[peop,setPeop] = useState([])
    useEffect(() =>{
        async function fetchData(){
         
        const req = await axios.get(`https://mentor-0.herokuapp.com/textinfo/text/notification?name=${localStorage.getItem('username')}&&utype=${localStorage.getItem('usertype')}&&mname=${localStorage.getItem('mentorname')}`);
        
        
        console.log("data on dahsboard- ",req.data)
        setPeop(req.data);
          
        
    
    }
    fetchData();
            },[])
            function reload(){
                window.location.reload()
            }
function hidden(){
    document.getElementById("hidding").style.display = "none"
    document.getElementById("hidding").style.width = "1100px"
    document.getElementById("show").style.display = "block"
    document.getElementById("show").style.width = "100%"
    document.getElementById("show").style.height="150px"
    document.getElementById("show").style.display = "flex"
    document.getElementById("show").style.justifyContent = "center"
    document.getElementById("show").style.alignItems = "center"
    document.getElementById("show").style.textDecoration = "underline"
    
    
}
function show(){
    document.getElementById("hidding").style.display = "block"
    document.getElementById("hidding").style.width = "1100px"
    document.getElementById("show").style.display = "none"

}
    return (
        <div style={{width:"100%",display:'flex',justifyContent:'center'}}>
            <Link style={{color:"black", display:"flex", justifyContent:"center",alignItems:"center",height:"150px", textDecoration:"underline"}} onClick={show} id="show">Show Recent Discussions</Link>
            <div style={{boxShadow: "1px 2px 3px 4px whitesmoke", display:"none", height:"250px", overflow:"scroll", position:"sticky", width:"1100"}} class="bg-danger" id="hidding">
                
            <Link onClick={hidden} style={{marginLeft:"1000px",marginTop:"20px",width:"100%",display:"flex", position:"fixed",color:"white",alignItems:"center",float:"right",
        fontWeight:"bold"}}>X</Link>
            {
            peop.length>0?
            peop.map(p =>(
                <div style={{paddingTop:"20px",marginLeft:"30px", color:"white"}}>
                    <h5><Link to="/Dashboard/discussion" style={{color:"white"}}>{p.username}</Link></h5>
                    <p>{p.text}</p>
                    <br></br>
                    </div>
                    
            )):
            <Link onClick={reload} style={{color:"white", display:"flex", justifyContent:"center",alignItems:"center",height:"250px"}}>No Notifications (Refresh Page)</Link>
            }
            
        </div>
        </div>
    )
}

export default RecentDiscussion
