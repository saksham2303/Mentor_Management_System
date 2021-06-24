import React from 'react';
import './HeaderFirst.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap';
function HeaderFirst() {
    return (
        <div className="height">
            <ReactBootstrap.Navbar  collapseOnSelect expand="lg" bg="danger" variant="dark" className="navbar navbar-custom">
  <ReactBootstrap.Navbar.Brand href="/" ><span className="Logo">Mentor</span></ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#info" className="link">Our Goal</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#">About us</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="More" id="collasible-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#">Devs</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="mailto:sakshambairathi@gmail.com">Contact us</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#info">Why us</ReactBootstrap.NavDropdown.Item>
        
      
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="/Signin">
        <span className="Logins" >
          
          <Link to="/Signin" className="btn">Login</Link>
          
          </span></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes"  >
        <span className="Login" >
          <Link to="/Signup" className="btn" >Register</Link>
          </span>
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
    
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
        </div>
    )
}

export default HeaderFirst
