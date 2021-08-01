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
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [author,setAuthor]=useState('');
   const [editForm,setEditForm]=useState(false)
   const showPosts=()=>{
    fetch('http://localhost:5000/blogs',{
      method:"GET"
  }).then(result=>result.json())
  .then(res=>(SetPosts(res)))
   }
  useEffect(()=>{
      showPosts()

  },[])
  const submitForm=(e)=>{

    e.preventDefault()
    console.log("Submitted");
    const formInput={title,description,author}
    
     fetch('http://localhost:5000/blogs',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInput),
   })
   showPosts()
  
  }
  const updateForm=(id)=>{
    setEditForm(true)

  }
  const handleDelete=(id)=>{
     fetch(`http://localhost:5000/blogs/${id}`,{
       method:"DELETE"
     }).then(result=>{
       result.json()
       console.log(result);
     })
    SetPosts(posts.filter(post=>post.id !== id))

  }
  return(
    <> 
       <div>
         
           {
             posts.map((post)=>
             <div style={{display:"flex"}} key={post.id}>
                 <div><h1>{post.title}</h1></div>
                 <div><p>{post.description}</p></div>
                 <div><p>{post.author}</p></div>
                <button onClick={()=>handleDelete(post.id)}>Delete</button>
                <button onClick={()=>updateForm(post.id)}>Edit</button>
                
            { editForm &&  
            
                <form onSubmit={updateForm}>
                <input type="text" value={post.title} onChange={e=>setDescription(e.target.value)} /><br></br>
                <input type="text" value={post.description} onChange={e=>setTitle(e.target.value)} /><br></br>
                <input type="text" value={post.author} onChange={e=>setAuthor(e.target.value)} />
                 <button>Submit</button>
              </form>
           
}
            
            
             </div>
             
             
             )
           }
           <h1>Post Form</h1>
           <form onSubmit={submitForm}>

             <input type="text" value={title} onChange={e=>setDescription(e.target.value)} /><br></br>
             <input type="text" value={description} onChange={e=>setTitle(e.target.value)} /><br></br>
             <input type="text" value={author} onChange={e=>setAuthor(e.target.value)} />
              <button>Submit</button>
           </form>

            
           
          
       </div>  
    </>
  )
 
}






 



export default App;
