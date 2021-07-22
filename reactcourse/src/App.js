import React from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';



function App(){
  // const students=['John','Ricky','Tim'];
   
   //We cant print for loop inside map cause inside return  for loop doesnt work
     const showName=(data)=>{
       console.log(data);
     }
     return (
     
      <div className="App">
    

      <User showName={showName} />
  
     
  

      </div>
    
    
    
  
     )
 
}

export default App;
