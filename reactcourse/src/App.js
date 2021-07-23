import React, {  useState} from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'



//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

function App(){
   const [val,setValue]=useState(1000);

  return(
    <>
      <input type="text" defaultValue="000" value={val} onChange={(e)=>setValue(e.target.value)} />
       {val}
    </>
  )
}



export default App;
