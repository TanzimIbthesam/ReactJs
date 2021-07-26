// import { withRouter } from "react-router-dom";

 import { useParams } from "react-router-dom";

const BlogDetails=(props)=>{
   const {id}=useParams()
    return(
        <div>
               Id is-{id }
        </div>
    )
}  

export default BlogDetails;