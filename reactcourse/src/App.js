


import React, {  useState }  from 'react';
import './App.css';
import PropsUseEffect from './PropsUseEffect';
// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

const App=()=>{
  const [count, setCount] =useState(0);
  const [increaseCount,setIncreaseCount]=useState(0);
  // useEffect(()=>{
  //   console.log("Clicked");
  // },[increaseCount])
  function addClick(){
    setCount(count+1)
  }
  function increase(){
    setIncreaseCount(increaseCount+1)
  }
     return (
       <div>
          <button onClick={addClick}>Increase Count</button>
          <button onClick={increase}>Increase Count</button>
          <PropsUseEffect count={count} increaseCount={increaseCount} />
       </div>
     )
 
}

export default App;
