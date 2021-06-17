
import { useState } from 'react';
const Home=()=>{
   const [blogs,allBlogs]=useState([
       {id:1,title:'Hello First Post',description:'Description of first post'},
       {id:2,title:'Hello Second Post',description:'Description of secondpost'},
    ]);

 
        return (
            <div className="">
                {
                    blogs.map((blog)=>(
                          <div  key={blog.id}>
                                Description-{blog.description}
                          </div>
                    ))
                }

            </div>
          );

        
 
}




export default Home;