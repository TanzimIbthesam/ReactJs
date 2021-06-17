
// import { useState } from 'react';
const Home=({blogs})=>{
 
// const blogs=props.blogs;
//  console.log(blogs);
        return (
            <div className="">
                {
                    blogs.map((blog)=>(
                          <div  key={blog.id}>
                              Title-{blog.title}
                                Description-{blog.description}
                          </div>
                    ))
                }

            </div>
          );

        
 
}




export default Home;