import { useState,useEffect } from 'react';
import Blogs from './Blogs'
import axios from 'axios';
const Home=()=>{

const [blogs,setBlogs ]=useState([
    // {id:1,title:'Hello First Post',description:'Description of first post',author:'John'},
    // {id:2,title:'Hello Second Post',description:'Description of second post',author:'John'},
    // {id:3,title:'Hello Second Post',description:'Description of third post',author:'Richard'},
    // {id:4,title:'Hello Second Post',description:'Description of fourth post',author:'Richard'}

 ]);
  const [loading,isLoading]=useState(true);
 
 const handleDelete=(id)=>{
         const newBlogs=blogs.filter(blog=>blog.id !== id)
          setBlogs(newBlogs)
 }

 useEffect(()=>{
      console.log("Use Effect");
    //  console.log(name);
    // fetch('http://localhost:8000/blogs')
    // .then((res)=>res.json())
    // .then(data=>{
    //     setBlogs(data)
    //     isLoading(false)
    // })
    axios.get(`http://localhost:8000/blogs`)
      .then(res => {
        setBlogs(res.data)
        isLoading(false)
      })
      .catch(err=>{
          console.log(err)
      })
 },[])
        return (
            <div className="">
                 <Blogs blogs={blogs} title="All blogs" handleDelete={handleDelete}/> 
                   {loading && <div>Loading</div>}
                   
                   
            </div>
         
          );

        
 
}




export default Home;