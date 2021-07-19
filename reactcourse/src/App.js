

// import { useState } from 'react';
import './App.css';
 import ClassUser from './ClassUser';
// import FunctionalUser from './FunctionalUser';


function App() {
  //  const [name,setName]=useState("Tanzim");
  function updateName(){
    //  setName("Tanzim Ibthesam")
     console.log("Clicked");

   }
  return (
    <div className="App">
       <ClassUser fullName="Tanzim Ibthesam" updateName={updateName} /> 
      {/* <FunctionalUser name="Tanzim" updateName={updateName} /> */}
      {/* <h1>{name}</h1>
     <button onClick={updateName}>Change Name</button> */}
    </div>
  );
}

export default App;
