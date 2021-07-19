

 import { useState } from 'react';
import './App.css';
//  import ClassUser from './ClassUser';
// import FunctionalUser from './FunctionalUser';


function App() {
    const [name,setName]=useState("Tanzim");
    const [print,setPrint]=useState(false)
  // function updateName(){
  //   //  setName("Tanzim Ibthesam")
  //    console.log("Clicked");

  //  }

  function getData(e){
     e.preventDefault();
      setName(e.target.value)
  }
   function setPrintValue(e){
    e.preventDefault();
    setPrint(true)
   }

 
  
  return (
    <div className="App">
       {print ?
        <h1>{name}</h1>
       :null}
     
       <form>
        
         
         <input type="text" onChange={(e)=>getData(e)} ></input>
         <button onClick={(e)=>setPrintValue(e)}>Print</button>
       </form>
       {/* <ClassUser fullName="Tanzim Ibthesam" updateName={updateName} />  */}
      {/* <FunctionalUser name="Tanzim" updateName={updateName} /> */}
      {/* <h1>{name}</h1>
     <button onClick={updateName}>Change Name</button> */}
    </div>
  );
}

export default App;
