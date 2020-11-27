
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function useFetchImage(page,searchTerm) {
    
   
     const api=process.env.REACT_APP_UNSPLASH_URL_API;
       const secretkey=process.env.REACT_APP_UNSPLASH_KEY;

       const [images,setImage] = useState([]);
       const [errors, setErrors] = useState([]);
       const [loading, setLoading] = useState(false);
 function fetchError(){
 setErrors("Unable to fetch images");
       setLoading(false);
 }  
 function fetch(){
const url= 
searchTerm === null ? "photos?" :`search/photos?query=${searchTerm}&`;
Axios.get(
      `${api}/${url}client_id=${secretkey}&page=${page}`
    )
          .then((response) => {
            if(searchTerm===null){
              fetchRandomPage(response)
            }else{
              fetchSearch(response);
            }
       
         setLoading(false);
      
      })
    .catch(e=>{
      fetchError()
    })
  }
     
 function fetchSearch(response) {
 if(page>1){
                 setImage([...images,...response.data.results]);
     
        }else{
           setImage([...response.data.results]);
          
        }
   
 }   
 
 function fetchRandomPage(response){
     setImage([...images,...response.data]);

 }
 

 useEffect(() => {
         setLoading(true);
    
       fetch();
  

 
    
}, [page,searchTerm]);

 return [images,setImage,errors,loading];
}
