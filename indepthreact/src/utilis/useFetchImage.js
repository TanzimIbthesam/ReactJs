
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useFetchImage(page) {
    
   
     

       const [images,setImage] = useState([]);
       const [errors, setErrors] = useState([]);
       const [loading, setLoading] = useState(false);
      
 useEffect(() => {
         setLoading(true);
       const url=process.env.REACT_APP_UNSPLASH_URL;
       const secretkey=process.env.REACT_APP_UNSPLASH_KEY;
    Axios.get( `${url}?clients_id=${secretkey}&page=${page}` )
 .then(response=>{
       setImage([...images,...response.data]);
      setLoading(false);
      
      

 })
      
 
 .catch((err)=>{
       setErrors(err.response.data.errors);
       setLoading(false);
 });

 
    
}, [page])
 return [images,setImage,errors,loading];
}
