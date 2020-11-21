
import React,{useEffect, useState}  from 'react';

import Images from  './components/Images';






function App(){
  console.log("Function started");

  const [title] =useState("Hello World");


 


  useEffect(() => {
   
  }, []);







 

    return(
            
      <section className="flex justify-center items-center">
        {console.log("Returned")}
      
            <div className="w-11/12">
              <div className="my-4 text-center">
                          <p className="text-2xl">{ title}</p> 
                      


                          <div>
                           
                          </div>
           
              </div>
            <Images />
                 </div>
        </section>
    )
    
  }


 export default App;
