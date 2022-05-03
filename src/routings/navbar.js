import React from 'react';
import { Link } from "react-router-dom";
function NavComponent(props)
{
return (
    //Navbar
    <div className="App">
     <nav class="navbar navbar-inverse navbar-fixed-top" >  
  <div class="container-fluid">  
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
    </button>
      <a class="navbar-brand" href="#">
          {props.name}</a>  
    </div>       
      <div class="collapse navbar-collapse" id="myNavbar">
    <ul class="nav navbar-nav">  
      <li class="active">< Link to="home">Home</Link></li>  
      <li class="dropdown">< Link to="aboutus">About-Us</Link></li>  
      <li>< Link to="contactus">Contact-Us</Link></li>  
    </ul> 
    <ul class="nav navbar-nav navbar-right">  
      <li><Link to="reg"><span class="glyphicon glyphicon-user"></span> Register</Link></li>  
      <li><Link to="login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>  
    </ul>   
  </div> 
  </div>  
</nav>
</div>
)
}
export default NavComponent;