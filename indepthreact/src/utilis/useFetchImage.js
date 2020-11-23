
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useFetchImage() {
    
   
     

       const [images,setImage] = useState([]);
      
 useEffect(() => {
       const url=process.env.REACT_APP_UNSPLASH_URL;
       const secretkey=process.env.REACT_APP_UNSPLASH_KEY;
    Axios.get( `${url}?client_id=${secretkey}` )
 .then(response=>setImage(response.data))

 
    
}, [])
 return [images,setImage];
}
