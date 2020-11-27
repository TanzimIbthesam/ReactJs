import React, { useState } from "react"; 

export default function SingleImage({index,image,removeImage}) {
    const [isHovering, setisHovering] = useState(false);
 
    

    
    
    return (
        <div className="w-1/3 flex justify-center p-1">
            <div className="relative">
                      <div 
                    onMouseEnter={()=>setisHovering(index)} 
                    onMouseLeave={()=>setisHovering(-1)}
                   key={index}>
                               <i 
                               className={`
                               fas fa-trash-alt absolute ml-56 cursor-pointer opacity-50 hover:opacity-100 text-2xl   ${
                            isHovering ===index ? "" : "hidden"
                             }` } onClick={()=>removeImage(index)}
                             ></i>
                            <img src={image} width="100%" height="auto" className="" alt="NewImage"  />
                         
                   </div>
                   </div>
        </div>
    )
}
