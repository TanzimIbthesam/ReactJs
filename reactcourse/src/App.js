import React, { useState } from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'



//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

function App(){
  
 const name="Tanzim"

  return(
    <div>
          <CompOne name={name} cmp={Counter} />
           
          <CompTwo name={name} cmp={Counter} />
           
          <CompThree name={name} cmp={Counter} />
           
    </div>
  )
}

function CompOne(props){
  return(
    <> 

        <h1>First Component-{props.name}</h1>
        <div style={{backgroundColor:"red",color:"white",width:"50%",margin:"0 auto"}}><props.cmp />Red</div>
    </>
   
  )
}
function CompTwo(props){
  return(
    <> 

        <h1>First Component-{props.name}-</h1>
        <div style={{backgroundColor:"yellow",color:"white",width:"50%",margin:"0 auto"}}><props.cmp />Yellow</div>
    </>
   
  )
}
function CompThree(props){
  return(
    <> 

        <h1>First Component-{props.name}</h1>
        <div style={{backgroundColor:"green",color:"white",width:"50%",margin:"0 auto"}}><props.cmp />Green</div>
    </>
   
  )
}

  function Counter(){
    const [counter,setCounter]=useState(0)
    return(
      <>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Count</button>
        
        </>
    )
   
  }



export default App;
