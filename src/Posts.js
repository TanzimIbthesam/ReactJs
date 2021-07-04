import axios from "axios"
import { useEffect, useState } from "react";



const Posts=()=>{
    // const [posts,SetPosts]=useState([]);
    //fetching single post
    const [post,SetPost]=useState({});
    const [id,setId]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>SetPost(res.data))
        .catch(err=>console.log(err))

    },[post])
   
    
    

    return (
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
            {post.title}
            {/* {posts.map(post=>(
                <div> 
                    {post.title}
                    </div>

            ))} */}
        </div>
    )

}

export default Posts;