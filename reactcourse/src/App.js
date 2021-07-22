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
     
      <div className="App">
     <Table striped bordered hover>
  <thead>
    <tr>
       <th>Sl no</th>
      <th>Name</th>
      <th>Age</th>
      <th>Standard</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
  {
        students.map((student,index)=>
        <tr key={index}>
              <td>{index+1}</td>
             <td>{student.name}</td>
             <td>{student.age}</td>
             <td>{student.standard}</td>
             {student.address.map((add,index)=>
             <td key={index}>
               {add.city}
               {add.house}
               {add.area}
             </td>
             
             )}
        </tr>
         
        )
      }
    
  
     
  </tbody>
</Table>
      </div>
    
    
    
  
     )
 
}

export default App;
