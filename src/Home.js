
 import { useState } from 'react';
import Blogs from './Blogs'
const Home=()=>{

const [blogs,allBlogs]=useState([
    {id:1,title:'Hello First Post',description:'Description of first post',author:'John'},
    {id:2,title:'Hello Second Post',description:'Description of second post',author:'John'},
    {id:3,title:'Hello Second Post',description:'Description of third post',author:'Richard'},
    {id:4,title:'Hello Second Post',description:'Description of fourth post',author:'Richard'}

 ]);
        return (
            <div className="">
                   <Blogs blogs={blogs.filter((blog)=>blog.author==='Richard')} title="Richards Blogs" />
                   <Blogs blogs={blogs} title="All Blogs" />
            </div>
         
          );

        
 
}




export default Home;