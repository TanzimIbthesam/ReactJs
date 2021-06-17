
import { useState } from 'react';
import './App.css';
import Home from './Home'
function App() {
    
     
     const [blogs,allBlogs]=useState([
      {id:1,title:'Hello First Post',description:'Description of first post'},
      {id:2,title:'Hello Second Post',description:'Description of secondpost'},
   ]);
 
  return (
    
    <div className="App">
       <Home blogs={blogs}/>
           
    </div>
  );
}

export default App;
