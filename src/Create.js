import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Create=()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('mario');
    const history=useHistory();
    const handleClick=(e)=>{
       e.preventDefault();
       const blog={title,description,author};
       axios.post(' http://localhost:8000/blogs',blog)
       .then((response=>console.log(response)))
       history.push('/')
    }
     return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleClick}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog description:{title}</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button>Add Blog</button>
        </form>
      </div>

     )
     
    

}

export default Create;