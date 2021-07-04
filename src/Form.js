import { useEffect, useState } from "react"


const Form=()=>{
    const [posts,setPosts]=useState([]);
    const [name,Setname]=useState('');
    const addPost=(e)=>{
        e.preventDefault();
        setPosts([...posts,{
            id:posts.length,
            name:'Tanzim'
        }])
    }
//    useEffect(()=>{
//        console.log("Use Effect");
//    })
   //To stop updating on every render
   useEffect(()=>{
       console.log("Use Effect");
   },[name])
  
    return (
        <div>
            <form>
                 <input type="text" onChange={e=>Setname(e.target.value)} />
                 <button onClick={addPost}>Add Post</button>
            </form>
            {
                 posts.map(post=>(
                     <div key={post.id}>{post.name}</div>
                 ))
            }
            {name}
            
        </div>
    )
}
 export default Form;