import { withRouter } from "react-router-dom";

// import { useParams } from "react-router-dom";

const BlogDetails=(props)=>{
    
    return(
        <div>
              Id is-{props.match.params.id}
        </div>
    )
}  

export default withRouter(BlogDetails);