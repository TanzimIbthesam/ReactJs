import Axios from 'axios';
import React,{useState,useEffect,useRef} from 'react'
import SingleImage from './singleimage';

export default function Images() {
    const [images, setImage] = useState([]);
    

  

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
  
    useEffect(() => {
       
        
 
 Axios.get('https://api.unsplash.com/photos/?client_id=DhL1FCLxzPFgPJlkf0QtDmyP0-S2jbkHeLFC4KKz1vY')
 .then(response=>setImage(response.data))

  
    },[])

    return (
        
        <div className="w-full ">
            
         
           
                 <div className="flex flex-wrap  justify-around">
    
            <ShowImage />
             
             </div>
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
              
        </div>
     
        

       
        )}