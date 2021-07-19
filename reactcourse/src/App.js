

 import { useState } from 'react';
import './App.css';
//  import ClassUser from './ClassUser';
// import FunctionalUser from './FunctionalUser';


function App() {
    // const [name,setName]=useState("Tanzim");
    const [print,setPrint]=useState(false)
  // function updateName(){
  //   //  setName("Tanzim Ibthesam")
  //    console.log("Clicked");

  //  }

  // function getData(e){
  //    e.preventDefault();
  //     setName(e.target.value)
  // }
  //  function setPrintValue(e){
  //   e.preventDefault();
  //   setPrint(true)
  //  }
 function showData(e){
   e.preventDefault()
   setPrint(true)
 }
 function hideData(e){
   e.preventDeafult()
   setPrint(false)
   
 }
  function toggle(e){
    e.preventDefault()
    setPrint(!print)
  }
  
  return (
    <div className="App">
       {print ?
        <h1>Hello World</h1>
       :null}
     
       <form>
        
         
         
         <button onClick={(e)=>showData(e)}>Show</button>
         <button onClick={(e)=>hideData(e)}>Hide</button>
         <button onClick={(e)=>toggle(e)}>Toggle</button>
         
         
       </form>
       {/* <ClassUser fullName="Tanzim Ibthesam" updateName={updateName} />  */}
      {/* <FunctionalUser name="Tanzim" updateName={updateName} /> */}
      {/* <h1>{name}</h1>
     <button onClick={updateName}>Change Name</button> */}
    </div>
  );
}

export default App;
