
import { Link } from "react-router-dom"


const Blog=()=>{
   
   return(
       <div>
           <h1>Blog</h1>
           {
               posts.map((post)=>
                <div key={post.id}>
                    <Link  to={`/blog/${post.id}`}>
                    {post.name}
                    </Link>
                    
                    </div>
               
               )

           }
           
       </div>
   )
   
}

export default Blog