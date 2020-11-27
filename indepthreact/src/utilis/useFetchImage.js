
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useFetchImage(page,searchTerm) {
    
   
     const api=process.env.REACT_APP_UNSPLASH_URL_API;
       const secretkey=process.env.REACT_APP_UNSPLASH_KEY;

       const [images,setImage] = useState([]);
       const [errors, setErrors] = useState([]);
       const [loading, setLoading] = useState(false);
       
 
 useEffect(() => {
         setLoading(true);
    // if(searchTerm===null) return;
    Axios.get( `${api}/photos?client_id=${secretkey}&page=${page}` )
 .then(res=>{
    
             
       
              setImage([...images,...res.data]);
              setLoading(false);
       })
      
 
 .catch((e)=>{
       setErrors("Unable to fetch images");
       setLoading(false);
 });

 
    
}, [page]);
 useEffect(() => {
    if (searchTerm=== null) return;
    Axios.get(
      `${api}/search/photos?client_id=${secretkey}&page=${page}&query=${searchTerm}`
    )
      .then((response) => {
        setImage([...response.data.results]);
        setLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch images"]);
        setLoading(false);
      });
  }, [searchTerm]);
 return [images,setImage,errors,loading];
}
