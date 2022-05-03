import React, { useState } from 'react';
function Incdec(prop){
    let [data,setData] = useState(0);
    const increment = () =>{
    setData(data+1);
    }
    const decrement = () =>{
    setData(data-1); 
    }
    return(
    <div class="operator">
        <p><b>Increment/Decrement</b></p>
        <button className="btn btn-danger"onClick={decrement}>Decrecrement</button>
        <button className="btn btn-success" onClick={increment}>Increment</button>
        <h1>{data}</h1>
        <h1>{prop.name}</h1>
        <br></br>
        </div>
    ) 
}
export default Incdec;