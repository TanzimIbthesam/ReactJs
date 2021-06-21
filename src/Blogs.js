import { Link } from "react-router-dom";

const Blogs=({blogs,title,handleDelete})=>{
   
   
    // const blogs=props.blogs;
    //  console.log(blogs);
            return (
                <div className="">
                    <h2>{ title }</h2>
                    {
                        
                        blogs.map((blog)=>(
                              <div  key={blog.id}>
                                  <Link to={`/blogdetails/${blog.id}`}>Title-{blog.title}</Link>
                                  
                                 
                                       
                              </div>
                        ))
                       
                    }
                     
                </div>
              );
    
            
     
    }

export default Blogs;