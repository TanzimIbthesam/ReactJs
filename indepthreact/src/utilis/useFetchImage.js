
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useFetchImage(page) {
    
   
     

       const [images,setImage] = useState([]);
       const [errors, setErrors] = useState([]);
      
 useEffect(() => {
       const url=process.env.REACT_APP_UNSPLASH_URL;
       const secretkey=process.env.REACT_APP_UNSPLASH_KEY;
    Axios.get( `${url}?client_id=${secretkey}&page=${page}` )
 .then(response=>setImage([...images,...response.data]))
 .catch((err)=>{
       setErrors(err.response.data.errors);
 });

 
    
}, [page])
 return [images,setImage,errors];
}
