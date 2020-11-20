import React, { useEffect, useState } from 'react'

export default function Images() {
    const [images, setImage] = useState([
          "https://images.unsplash.com/photo-1605447302541-bd14aa1417ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1605580556856-db8fae94b658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1605555649847-b19b05bd048f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          " https://images.unsplash.com/photo-1605536350737-421082456b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      
        

    ]);
    
    // const [isHovering, setisHovering] = useState(false);
  

 const [showImageUrl, setImageUrl] = useState("");
   const [isHovering, setisHovering] = useState(-1);
    
  function removeImage(index) {
    setImage(images.filter((image,i)=>i !==index));
   console.log("clciked");

   
    //    setImage([
    //         ...images.slice(0,index),
    //         ...images.slice(index+1,images.length)
          
           
    //    ])
   

   

     
   
 }


  function ShowImage(){
 return   images.map((image,index) => {
               return(
                   <div className="relative">
                      <div 
                    onMouseEnter={()=>setisHovering(index)} 
                    onMouseLeave={()=>setisHovering(-1)}
                   key={index}>
                               <i 
                               className={`
                               fas fa-trash-alt absolute ml-56 cursor-pointer opacity-50 hover:opacity-100 text-2xl   ${
                            isHovering ===index ? "" : "hidden"
         
    }` }
     onClick={()=>removeImage(index)}
    ></i>
                            <img 
                            src={image} width="150" className="w-64 h-64" alt="NewImage"  
                        
                            
                            />
                         
                   </div>
                   </div>
                 
               )
  });
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
        const interval=setInterval(() => {
         console.log("Hello");   
        }, 1000);
        
        return () => {
            console.log("Unmounted");
            clearInterval(interval);
        }
    }, [])
    return (
        <div className="w-full ">
                 <div className="flex flex-wrap  justify-around">
            <ShowImage />
             
             </div>
            <div className="flex justify-center mt-4">
                <input 
                type="text" 
                className="px-4 py-1 border ml-2" 
                value={showImageUrl}
                onChange={inputChange}
                 
                
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