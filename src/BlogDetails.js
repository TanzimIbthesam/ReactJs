import {useParams} from "react-router-dom"
import useFetch from "./useFetch"


const BlogDetails=()=>{
    const {id}=useParams()
    const { data:blog, loading, error }=useFetch('http://localhost:8000/blogs/'+id);
    return(
        <div>
             Description-{id}
             {loading && <div>Loading...</div> }
             {error && <div>Loading...</div> }
             {
                 blog &&(
                     <div> 
                       <h1>Title-{blog.title}</h1>
                     <p>Description-{blog.description}</p>
                     <p>Author-{blog.author}</p>
                     </div>
                   
                 )
             }
        </div>
    )
}

export default BlogDetails;