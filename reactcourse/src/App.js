


import React, { useState } from 'react';
import './App.css';
import ClassUserTwo from './ClassUsertwo';

function App(){
  const [name,setName]=useState("Tanzim");
  const changeName=()=>{
    setName("Tanzim Ibthesam")
  }
  return(
    <div>
      <button onClick={changeName}>Change</button>
      <p>{name}</p>
      <ClassUserTwo name={name} />
    </div>
  )
}

export default App;
