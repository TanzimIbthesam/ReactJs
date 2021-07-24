import React from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogDetails from './BlogDetails';
 import { BrowserRouter as Router,Route,Link } from "react-router-dom";
// import Home from './Home';
// import Nav from './Nav';
// import Allrouter from './Allrouter';



function App(){
  let posts=[
    {id:1,name:'Tanzim',profession:"Web Developer"},
    {id:2,name:'Tanzim',profession:"Web Developer"}
]
  return(
    <> 
       <div>
           <h1>Blog</h1>
           <Router>
           {
               posts.map((post)=>
                <div key={post.id}>
                    <Link  to={`/blog/${post.id}`}>
                    {post.name}
                    </Link>
                    
                    </div>
               
               )



           } 
           <Route path="/blog/:id" ><BlogDetails /></Route>
      </Router>
       </div>  
    </>
  )
}




 



export default App;
