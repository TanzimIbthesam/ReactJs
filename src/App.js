
import { useState } from 'react';
import './App.css';

function App() {
    
     const [name,changedName]=useState("Tanzim");
     const [age,changedAge]=useState(25);
     const  changeName=()=>{
       changedName("Tanzim Ibthesam");
     }
     const changeAge=()=>{
          changedAge(30)
     }
 
  return (
    <div className="App">
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>
            <p>His name is {name} and age is {age}</p>
    </div>
  );
}

export default App;
