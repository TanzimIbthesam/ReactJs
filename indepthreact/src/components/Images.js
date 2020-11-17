import React, { useEffect, useState } from 'react'

export default function Images() {
    const [images, setImage] = useState([
          "https://images.unsplash.com/photo-1605447302541-bd14aa1417ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1605580556856-db8fae94b658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1605555649847-b19b05bd048f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          " https://images.unsplash.com/photo-1605536350737-421082456b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      
        

    ])
    
  
  function ShowImage(){
 return   images.map(image => {
               return(
                   <div>
                            <img src={image} width="150" />
                   </div>
               )
  });
}
function addToImage(){
    setImage([
        ...images,
        " https://images.unsplash.com/photo-1605472878930-13165e518b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

    ]
    )
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
                 <div className="flex flex-wrap  justify-center ">
            <ShowImage />
             
             </div>
            <div className="flex justify-center mt-4">
                <input 
                type="text" 
                class="px-4 py-1 border ml-2" />
                <button onClick={addToImage} className="px-4 py-1 bg-indigo-400 text-white border rounded-xl font-serif ">Enter Link</button>
               </div>
              
        </div>
     
        

       
        )}
