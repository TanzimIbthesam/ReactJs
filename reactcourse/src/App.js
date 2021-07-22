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
  const students=[
    {name:'John',age:13,standard:"7",address:[
      {
        city:"Dhaka",house:"4",area:"Gulshan"
     }
    ]},
    {name:'John',age:13,standard:"7",address:[
      {
        city:"Dhaka",house:"5",area:"Gulshan"
     }
    ]},
    {name:'John',age:23,standard:"7",address:[
      {
        city:"Dhaka",house:"6",area:"Gulshan"
     }
    ]},
  ];
     return (
     
      <React.Fragment>
    
  {
        students.map((student,index)=>
        <>
            <User student={student} index={index}/>
             
             
             
           </>    
         
        )
      }
    
  
     
  

      </React.Fragment>
    
    
    
  
     )
 
}

export default App;
