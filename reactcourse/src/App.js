import React from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 import { Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';



function App(){
  // const students=['John','Ricky','Tim'];
   
   //We cant print for loop inside map cause inside return  for loop doesnt work
  const students=[
    {name:'John',age:13,standard:"7"},
    {name:'John',age:13,standard:"7"},
    {name:'John',age:23,standard:"7"},
  ];
     return (
     
      <div className="App">
     <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Age</th>
      <th>Standard</th>
    </tr>
  </thead>
  <tbody>
  {
        students.map((student,index)=>
        <tr key={index}>
             <td>{student.name}</td>
             <td>{student.age}</td>
             <td>{student.standard}</td>
        </tr>
       
        )
      }
    
  
     
  </tbody>
</Table>
      </div>
    
    
    
  
     )
 
}

export default App;
