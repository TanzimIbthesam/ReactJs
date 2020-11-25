// import Axios from 'axios';
import React,{useState} from 'react'
import SingleImage from './singleimage';

import useFetchImage from '../utilis/useFetchImage';
import Loading from './Loading';

import InfiniteScroll from 'react-infinite-scroll-component';

export default function Images() {
  const [page, setPage] = useState(1);
   const [images,setImage,errors,loading]=useFetchImage(page);
 





 
    
  function removeImage(index) {
      

   

   
       setImage([
            ...images.slice(0,index),
            ...images.slice(index+1,images.length)
          
           
       ])
   

}
function ShowImage(){
 return (
      <InfiniteScroll 
      dataLength={images.length}
      next={()=>setPage(page+1)}
      hasMore={true}
      className="flex flex-wrap "
      >
      { images.map((img,index) =>(
  <SingleImage image={img}
   removeImage={removeImage} 
   index={index} 
 key={index}
 
 />
 ))};
      </InfiniteScroll>
 ) 
}

     
 
    

   
// }
  


    return (
        <div>
        <div className=" ">
        
          
                
                 {
                  errors.length>0 ? (
                       <div className="flex h-screen">
                          <p class="text-red-400 font-mono text-center m-auto text-2xl"> {errors[0]}</p>   
                       </div>
                    
         
                  ):null
             }
         
           
         
           
                 <div className=" ">
    
            <ShowImage />
            {
                loading && <Loading />
            }
           
             
             </div>
           
            
        </div>
       
     
              </div>
     
        

       
        )}