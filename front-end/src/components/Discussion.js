import React, {useContext, useEffect, Fragment, useState} from 'react';
import { Redirect , Link} from "react-router-dom";
import axios from 'axios';
import './Discussion.css'
import * as ReactBootstrap from 'react-bootstrap';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function Discussion() {
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
            mentor:localStorage.getItem('mentorname'),
            year: localStorage.getItem('menteeyear')
            
    
          })


         let pk =0;
          const {username,text,mentor,year} = input;
        
        function  handleChange(e) {
        setInput({
          
            ...input,
            [e.target.name]: e.target.value
          
        })
        }
        const [inputed, setInputed] = useState({
            // ueryb
            
          
            yearsearch: localStorage.getItem('getyear')
            
    
          })
          const {yearsearch} = inputed;
        function  handleChanged(e) {
            setInputed({
              
                ...inputed,
                [e.target.name]: e.target.value
              
            })
            
        
            
            }
            
        function handleClick(e){
          e.preventDefault();
          
           const userinfo  = {
            
            
            username,
            text,
            mentor,
            year
          }
         return axios.post('https://mentor-0.herokuapp.com/textinfo/text',userinfo)
       
        }
        function reload(){
            window.location.reload()
        }

    function submitdis(e){
        
        handleClick(e)
        setTimeout(() => window.location.reload(), 500);
       
        

    }

        const [peop, setPeop] = useState([]);
        
        localStorage.getItem('usertype') == "Mentee" ?
        localStorage.setItem('getyear',localStorage.getItem('menteeyear')):
        localStorage.setItem('getyear',yearsearch)
        console.log("storageyera",localStorage.getItem("getyear"))
        useEffect(() =>{
        async function fetchData(){
          
        const req = await axios.get(`https://mentor-0.herokuapp.com/textinfo/text?name=${localStorage.getItem('username')}&&mentor=${localStorage.getItem('mentorname')}&&year=${localStorage.getItem('getyear')}&&utype=${localStorage.getItem('usertype')}`);
        
        
        console.log("data on dahsboard- ",req.data)
        setPeop(req.data);
          
       
    
    }
    fetchData();
            },[])

        
const [like,setLike] = useState(0)
const [unlike,setUnlike] = useState(0)
function onClickLike(id,likes){
    setLike(like+1)
    axios.post(`https://mentor-0.herokuapp.com/textinfo/text/update?id=${id}&&vote=${"like"}`)
    setTimeout(() => window.location.reload(), 500);
    
}

function reload(){
    window.location.reload()
}
function onClickUnlike(id,unlikes){
    setUnlike(unlike+1)
    axios.post(`https://mentor-0.herokuapp.com/textinfo/text/update?id=${id}&&vote=${"unlike"}`)
    setTimeout(() => window.location.reload(), 500);
    
}
        const authlink = (
        
            <Fragment>
                <div className="view__discussions">

                    {
                        peop.length>0 ?
                    peop.map(p => (
                        <div>
                    
                        
                        <h5 style={{color:"blue"}}>{p.username }</h5>
                        <p>{ p.text}</p>
                        {p.text ? <div className="votes">
                        <Link onClick = {() => onClickLike(p._id,like)} >{p.like+ " "+"Upvote" }</Link>
                        <Link onClick = {() => onClickUnlike(p._id,unlike)} style={{paddingLeft:"10px"}} className="downvote" >{ p.unlike+ " "+"Downvote" }</Link>
</div>
                       : null }
                        </div>
                        
                    )):
                    <p style={{height:"400px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>No discussions yet</p>
                
                
                }
                   
                    
                    
                    
                </div>
                <br/>
                {localStorage.getItem('usertype') == "Mentor" ?
                <div>
<ReactBootstrap.Form >

<ReactBootstrap.Form.Control as="select" 
      onChange={ handleChanged } 
      
      className="wonder"
      name = "yearsearch"
      value={yearsearch} 
      defaultValue="3rd">
          
        <option onClick = {() => reload()} >1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
       
      </ReactBootstrap.Form.Control>
                         <ReactBootstrap.Button style={{marginBottom:"20px"}} variant="primary" type="submit" className="button" onClick={reload} >
                  
        Search
      </ReactBootstrap.Button> 
      
</ReactBootstrap.Form>
               
                    <ReactBootstrap.Form>
                        <ReactBootstrap.Form.Control as ="textarea" onChange={handleChange} name="text" value={text} placeholder="Typ text here..">
                            </ReactBootstrap.Form.Control> 
                            <ReactBootstrap.Form.Control as="select" 
      onChange={ handleChange } 
      
      className="wonder"
      name = "year"
      value={year} 
      defaultValue="Choose...">
          
        <option onClick = {() => reload()} >1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
       
      </ReactBootstrap.Form.Control>
                        <ReactBootstrap.Button variant="primary" type="submit" className="button" onClick={submitdis} >
                  
        Post
      </ReactBootstrap.Button>
                    </ReactBootstrap.Form>
                    </div>
                    
                    
                    :


                    <ReactBootstrap.Form>
                    <ReactBootstrap.Form.Control as ="textarea" onChange={handleChange} name="text" value={text} placeholder="Typ text here.."></ReactBootstrap.Form.Control>
                    <ReactBootstrap.Button variant="primary"  type="submit" className="button" onClick={submitdis} >
              
    Post
  </ReactBootstrap.Button>
                </ReactBootstrap.Form>




                }
                <br/>
            </Fragment>
            
        )

        
       

    return (
        <div className="discussion">
            
            {token ? authlink : <Redirect to="/Signup" />}
        </div>
    )
}

export default Discussion
