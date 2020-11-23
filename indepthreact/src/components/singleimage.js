import React, { useState } from "react"; 
export default function SingleImage({index,image,removeImage}) {
    const [isHovering, setisHovering] = useState(false);
    

    
    
    return (
        <div>
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
                            <img src={image.urls.full} width="150" className="w-64 h-64" alt="NewImage"  />
                         
                   </div>
                   </div>
        </div>
    )
}
