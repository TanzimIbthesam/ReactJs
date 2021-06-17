
import { useState } from 'react';
import './App.css';
import Home from './Home'
function App() {
    
     
     const [blogs,allBlogs]=useState([
      {id:1,title:'Hello First Post',description:'Description of first post',author:'John'},
      {id:2,title:'Hello Second Post',description:'Description of secondpost',author:'John'},
      {id:3,title:'Hello Second Post',description:'Description of secondpost',author:'Richard'},
      {id:4,title:'Hello Second Post',description:'Description of secondpost',author:'Richard'}

   ]);
 
  return (
    
    <div className="App">
       <Home blogs={blogs} title="All Blogs"/>
       <Home blogs={blogs.filter((blog)=>blog.author==='Richard')} title="Richards Blogs"/>
           
    </div>
  );
}

export default App;
