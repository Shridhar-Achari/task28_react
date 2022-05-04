import React from 'react';  
import './App.css';
import NavComponent from './routings/navbar';
import Incdec from "./states";
import { Route, Routes } from "react-router-dom";
import Home from "./routings/home"
import Register from "./routings/reg";
import Login from "./routings/login";
import Aboutus from "./routings/aboutus";
import Contactus from './routings/contactus';
import NestEmp from './Nested_components/nestedcomp';
import API from './routings/employee';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent name="shridhar"/>
        <br></br>
        <h1 className="Task28"><ul>TASK-28 REACT</ul></h1>
        <div>
        <Home/>
        <Routes>
            <Route path="reg" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="empl" element={<NestEmp />} />
            <Route path="api" element={<API />} />
            <Route path="state" element={<Incdec />} />
            {/* <Route path="/" element={<Home />} />  */}
          </Routes>
          </div>
      </header>
    </div>
  );
  }
export default App;
