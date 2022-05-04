import React, { Component } from "react";
import emp from './profiles.json';
import JsonData from './profiles.json';

class Employees extends Component {
  render() {
    return (
        <div>
        <h1>Employees Details[JSON]</h1>
        {emp.map((record, i) =>
          <div key={i}>
            <img src={record.pic} class="img1" alt={`Profile pic`} /> 
            <span>{record.firstName} {record.lastName} {record.dept} {record.location}</span>
          </div>)}
          <h1>JSON DATA IN TABLE</h1>
          <JsonDataDisplay /> 
          </div>
    );
  }
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

export default Employees;