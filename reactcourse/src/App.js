import React, { useEffect, useState } from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'

// import BlogDetails from './BlogDetails';
//  import { BrowserRouter as Router,Route,Link } from "react-router-dom";


// import Home from './Home';
// import Nav from './Nav';
// import Allrouter from './Allrouter';



function App(){
  const [posts,SetPosts]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:4000/blogs',{
          method:"GET"
      }).then(result=>result.json())
      .then(res=>(SetPosts(res)))

  },[])

  return(
    <> 
       <div>
         
           {
             posts.map((post)=>
             <>
                {post.title}
             </>
             
             
             )
           }
           
          
       </div>  
    </>
  )
}




 



export default App;
