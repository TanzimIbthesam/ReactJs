import axios from "axios"
import { useEffect, useState } from "react";



const Posts=()=>{
    const [posts,SetPosts]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>SetPosts(res.data))
        .catch(err=>console.log(err))

    },[])
   
    
    

    return (
        <div>
            {posts.map(post=>(
                <div> 
                    {post.title}
                    </div>

            ))}
        </div>
    )

}

export default Posts;