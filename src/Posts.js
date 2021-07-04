import axios from "axios"
import { useEffect, useState } from "react";



const Posts=()=>{
    // const [posts,SetPosts]=useState([]);
    //fetching single post
    const [post,SetPost]=useState({});
    const [id,setId]=useState(1);
    const [clickId,getidfrombuttonClick]=useState(0);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${clickId}`)
        .then(res=>SetPost(res.data))
        .catch(err=>console.log(err))

    },[clickId])

    const handleClick=()=>{
        getidfrombuttonClick(id)
    }
   
    
    

    return (
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
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