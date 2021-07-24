import React, { useRef } from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'



//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

function App(){
  
 
  let inputOne=useRef(null)
   const submitForm=(e)=>{
    e.preventDefault()
    
    let input=document.getElementById("name").value
    
    console.log(input,inputOne.current.value);
    
   }
  return(
    <div>
        <form onSubmit={submitForm}>
        <input type="text" id="name"/><br>
        </br>
        <input type="text" ref={inputOne}/><br>
        </br>
        
       
        
        <button>Send</button>
        </form>
        
      
    </div>
  )
}



export default App;
