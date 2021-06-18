
 import { useState,useEffect } from 'react';
import Blogs from './Blogs'
const Home=()=>{
const [name,setName]=useState("Tanzim");
const [blogs,setBlogs ]=useState([
    {id:1,title:'Hello First Post',description:'Description of first post',author:'John'},
    {id:2,title:'Hello Second Post',description:'Description of second post',author:'John'},
    {id:3,title:'Hello Second Post',description:'Description of third post',author:'Richard'},
    {id:4,title:'Hello Second Post',description:'Description of fourth post',author:'Richard'}

 ]);
 const handleDelete=(id)=>{
         const newBlogs=blogs.filter(blog=>blog.id !== id)
          setBlogs(newBlogs)
 }
 useEffect(()=>{
     console.log("Use Effect");
     console.log(name);
 },)
        return (
            <div className="">
                  
                   <Blogs blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
                   <button onClick={()=>setName('Tanzim Ibthesam')}>Change Name</button>
                    The name is-{name}
                    <button onClick={()=>console.log('Click')}>Random Click</button>
            </div>
         
          );

        
 
}




export default Home;