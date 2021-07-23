import React, { useMemo, useState } from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'

//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

const App=()=>{
  const [count,setCount]=useState(10);
  const [updateCount,setUpdateCount]=useState(10);
  // function newcount(){
   
    
  // }
    const countMemo=useMemo(function newcount(){
      console.log("Count updated");
      return count+1
    },[count])

   return(
     <>
       <button onClick={()=>setCount(count+1)}> Count</button>
       <p> Count-{count}</p>
       <button onClick={()=>setUpdateCount(updateCount+1)}> Count</button>
       <p>Update Count-{updateCount}</p>
       {/* { newcount() } */}
       {countMemo}
     </>
   )
}



export default App;
