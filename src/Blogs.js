

const Blogs=({blogs,title,handleDelete})=>{
   
   
    // const blogs=props.blogs;
    //  console.log(blogs);
            return (
                <div className="">
                    <h2>{ title }</h2>
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

export default Blogs;