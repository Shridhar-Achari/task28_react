import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
        <h1>ROUTING</h1>
        <Link to="reg">Registration Page</Link>
        <br></br>
        <Link to="login">Login Page</Link>
        <br></br>
        <Link to="aboutus">About-us Page </Link>
        <br></br>
        <Link to="contactus">Contact-us Page</Link>
        <br></br>
        <Link to="/"></Link>
     </div>
    );
  }
}

export default Home;