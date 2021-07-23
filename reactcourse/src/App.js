import React, { createRef} from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User';


//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

function App(){
  const inputRef=createRef(null);
  const hookRef=()=>{
     inputRef.current.value=1000
  }
  return(
    <>
     
     <button onClick={hookRef}>Hook ref</button>
     <User ref={inputRef}/>
    </>
  )
}



export default App;
