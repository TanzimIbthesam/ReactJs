// import Axios from 'axios';
import React,{useState,useRef} from 'react'
import SingleImage from './singleimage';
import useScroll from '../utilis/useScroll'
import useFetchImage from '../utilis/useFetchImage';
import Loading from './Loading';

export default function Images() {
  const [page, setPage] = useState(1);
   const [images,setImage,errors,loading]=useFetchImage(page);
    const scrollPosition=useScroll();

  

 const [showImageUrl, setImageUrl] = useState("");



 const inputRef= useRef(true);

 
    
  function removeImage(index) {
      

   

   
       setImage([
            ...images.slice(0,index),
            ...images.slice(index+1,images.length)
          
           
       ])
   

}
function ShowImage(){
 return   images.map((img,index) => <SingleImage image={img} removeImage={removeImage} index={index} 
 key={index}
 
 />)
}
function inputChange(e) {
    setImageUrl(e.target.value);
    
}
function addToImage(){
 if(showImageUrl !== ""){
            setImage([showImageUrl, ...images]);
         setImageUrl("");

 }
     
 
    

   
}
  

if (loading) return <Loading />
    return (
        <div>
        <div className=" ">
            {scrollPosition}
          
                
                 {
                  errors.length>0 ? (
                       <div className="flex h-screen">
                          <p class="text-red-400 font-mono text-center m-auto text-2xl"> {errors[0]}</p>   
                       </div>
                    
         
                  ):null
             }
         
           
         
           
                 <div className="flex flex-wrap  justify-around ">
    
            <ShowImage />
             
             </div>
             {
                  errors.length>0 ? null : (
                          <button onClick={()=>{setPage(page+1)}}>Load More</button>
         
                  )
             }
            
        </div>
          {
                  errors.length>0 ? null : (
                              <div className="flex justify-center mt-4">
                <input 
                id="inputBox"
                type="text" 
                className="px-4 py-1 border ml-2" 
                value={showImageUrl}
                onChange={inputChange}
                ref={inputRef}
                 
                
                />
                <button 
               
            
                 disabled={showImageUrl=== ""}
            className={`px-4 py-1 text-white ml-2 ${
             showImageUrl !== "" ? "bg-indigo-600" : "bg-indigo-300"
            }`}
                 onClick={addToImage} 
                >
                    Enter Link</button>
               </div>
         
                  )
             }
     
              </div>
     
        

       
        )}