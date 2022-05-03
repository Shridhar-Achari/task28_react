import React from "react";

function Department()
{
    return <span>Department Name: Testing</span>;
}

export class Employee extends React.Component
{
    render()
    {
        return <span>Employee Name: Preetam <Department/></span>;
    }
}

export default Employee;