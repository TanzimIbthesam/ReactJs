
import React,{useEffect, useRef, useState}  from 'react';
//if you dont want to prefix the React. we can prefix the useState
import Images from  './components/Images';




function App(){
  console.log("Function started");
  //  const [isShowing, setIsShowing] = React.useState(false);
  const [title, setTitle] =useState("Hello World");
   const [isShowing, setIsShowing] =useState(false);
 useEffect(()=>{
   console.log("App Mounted");
 },[]);
  function toggleButton(){
    setIsShowing(!isShowing);
  // this.setState({isShowing:!this.state.isShowing});
}
  //useState in array there are 2 values 
  //1.set state 
  //2.Update value of the state 
  //if we have 2 state we can also define it 
  const mountref = useRef(false);
  useEffect(() => {
   if(mountref.current){
     console.log("App updated");
   }else{
     mountref.current=true;
   }
  }, [isShowing]);







 
    //state is react are immutable
    return(
            
      <section className="flex justify-center items-center">
        {console.log("Returned")}
      
            <div className="w-1/2">
              <div className="my-4 text-center">
                          <p className="text-2xl">{ title}</p> 
                   
                          <button 
                          className="bg-blue-800 text-white px-6 py-4 rounded-xl"
                          onClick={toggleButton}
                          alt="Toggle Image"
                          >Toggle Image</button>
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
