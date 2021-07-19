

 import { useState } from 'react';
import './App.css';
//  import ClassUser from './ClassUser';
// import FunctionalUser from './FunctionalUser';


function App() {
    // const [name,setName]=useState("Tanzim");
    const [text,setText]=useState("");
    const [options,setOptions]=useState("");
    const [check,setCheck]=useState("")
 const addProfile=(e)=>{
 e.preventDefault()
 console.log(text,options,check);
 }
  return (
    <div className="App">
       <form onSubmit={addProfile}>
             <input type="text" onChange={(e)=>setText(e.target.value)}></input><br></br>
             {/* <select onChange={(e)=>setOptions(e.target.value)}>
               <options>Web designer</options>
               <options>Web developer</options>
               
             </select><br></br> */}
             <select onChange={(e)=>setOptions(e.target.value)}>
          <option >Volvo</option>
           <option >Saab</option>
       <option >Mercedes</option>
        <option value="audi">Audi</option>
</select>
            <input type="checkbox" onChange={(e)=>setCheck(e.target.value)} ></input><br></br>
            <p>Are you sure you agree with terms and conditions?</p>
            
            <button>SUBMIT</button>
       </form>
    </div>
  );
}

export default App;
