import { useState } from "react"


const Form=()=>{
    const [posts,setPosts]=useState([]);
    const addPost=(e)=>{
        e.preventDefault();
        setPosts([...posts,{
            id:posts.length,
            name:'Tanzim'
        }])
    }
    return (
        <div>
            <form>
                 
                 <button onClick={addPost}>Add Post</button>
            </form>
            {
                 posts.map(post=>(
                     <div key={post.id}>{post.name}</div>
                 ))
            }
            
        </div>
    )
}
 export default Form;