import React from 'react';
import './Masking.css';
import { MDBAnimation } from "mdbreact";
function Masking() {
    return (
        <div>
            <div className="Content">
  
  <div class="mask">
    <div class="maskincontent">
  <h1>Interact with Mentors</h1>
  <pre>Solve your doubts by interacting with <br></br>
    your Mentors and batchmates</pre>
  <center><a href="/Signup" className="anchorTag">Free Account</a></center>
  <center><MDBAnimation type="bounce" infinite><a href="#info" className="aimg"><img src="Assets/images/keyboard_arrow_down_white_24dp.svg" alt="not loaded" /></a></MDBAnimation></center>
  </div>
</div>

    
</div>
        </div>
    )
}

export default Masking
