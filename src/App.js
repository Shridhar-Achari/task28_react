import React from 'react';  
import './App.css';
import Employee from './Nested_components/nestedcomp';
import emp from './Data/profiles.json';
import JsonData from './Data/profiles.json';
import NavComponent from './routings/navbar';
import Incdec from "./states";
import { Route, Routes } from "react-router-dom";
import Home from "./routings/home"
import Register from "./routings/reg";
import Login from "./routings/login";
import Aboutus from "./routings/aboutus";
import Contactus from './routings/contactus';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent name="shridhar"/>
        <h1 className="Task28"><ul>TASK-28 REACT</ul></h1>
        <Incdec/>
        <hr></hr>
        <div class="nest">
        <h1>Employee Details:[Nested]</h1>
        <Employee/>
        <hr></hr>
        
        <Home/>
        <Routes>
            <Route path="reg" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="/" element={<Home />} />
          </Routes>
      
      
      <h1>Employees Details[JSON]</h1>
        {emp.map((record, i) =>
          <div key={i}>
            <img src={record.pic} class="img1" alt={`Profile pic`} /> 
            <span>{record.firstName} {record.lastName} {record.dept} {record.location}</span>
          </div>)}
      </div>
      <hr>
      </hr>
      <JsonDataDisplay />
      </header>
    </div>
  );
}

function JsonDataDisplay() 
{
  const DisplayData = JsonData.map(
    (info) => {
      return (
        <tr>
          <td><img src={info.pic} class="img1" alt={`Profile pic`} /></td>
          <td>{info.id}</td>
          <td>{info.firstName}</td>
          <td>{info.lastName}</td>
          <td>{info.dept}</td>
          <td>{info.location}</td>
        </tr>
      )
    }
  )
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Emp_Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Designation</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  )
}
export default App;
