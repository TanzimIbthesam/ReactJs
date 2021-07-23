import React, { createRef} from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'


//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

function App(){
  const inputRef=createRef();
  const hookRef=()=>{
     
      inputRef.current.style="background:black;color:white"
      inputRef.current.focus()
      // inputRef.current.style="color:white"
  }
  return(
    <>
     <input type="text" ref={inputRef}  />
     <button onClick={hookRef}>Hook ref</button>
    </>
  )
}



export default App;
