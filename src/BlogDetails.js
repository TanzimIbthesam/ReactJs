import axios from "axios";
import {useParams} from "react-router-dom"
import useFetch from "./useFetch"
import { useHistory } from "react-router-dom";


const BlogDetails=()=>{
    const {id}=useParams()
    const { data:blog, loading, error }=useFetch('http://localhost:8000/blogs/'+id);
    const handleDelete=(e)=>{
       e.preventDefault()
       axios.delete('http://localhost:8000/blogs/'+id)
       .then(res=>{
           console.log(res);
           useHistory.push('/')
       })
    }
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
                      <button onClick={handleDelete}>Delete</button>
                     </div>
                   
                 )
             }
        </div>
    )
}

export default BlogDetails;