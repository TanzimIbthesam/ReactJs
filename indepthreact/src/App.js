
import React,{useEffect, useState}  from 'react';

import Images from  './components/Images';






function App(){
  console.log("Function started");

  const [title] =useState("Hello World");
   const [isShowing, setIsShowing] =useState(false);

  

  function toggleButton(){
    setIsShowing(!isShowing);
 
}

 


  useEffect(() => {
   
  }, []);







 

    return(
            
      <section className="flex justify-center items-center">
        {console.log("Returned")}
      
            <div className="w-11/12">
              <div className="my-4 text-center">
                          <p className="text-2xl">{ title}</p> 
                      
                   
                          <button 
                          className="bg-blue-800 text-white px-6 py-4 rounded-xl"
                          onClick={toggleButton}
                          alt="Toggle Image"
                          >Toggle Image</button><br/>
                     

                          <div>
                           
                          </div>
           
              </div>
                 {
                isShowing  ? (
                  <Images/>
             ):null
             }
                 </div>
        </section>
    )
    
  }


 export default App;
