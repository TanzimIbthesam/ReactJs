
import React,{useEffect, useRef, useState}  from 'react';
//if you dont want to prefix the React. we can prefix the useState
import Images from  './components/Images';
import Counter from './components/Counter';





function App(){
  console.log("Function started");

  const [title] =useState("Hello World");
   const [isShowing, setIsShowing] =useState(false);
   const [name, setName] = useState("Tanzim");
  
 useEffect(()=>{
   console.log("App Mounted");
 },[]);
  function toggleButton(){
    setIsShowing(!isShowing);
  // this.setState({isShowing:!this.state.isShowing});
}
function inputChange(e){
 setName(e.target.value);

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
                          >Toggle Image</button><br/>
                        
                          <Counter />
                          <input onChange={()=>inputChange}  type="text" className="px-4 py-1 rounded-3xl border mt-1"/> 
                          <br></br>
                        <p className="text-2xl">Name-{name}</p> 

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
