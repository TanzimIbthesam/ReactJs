import { useEffect, useState } from "react";

const MouseHook=()=>{
    const [X,setX]=useState(0);
    const [Y,setY]=useState(0);
     
   const logMousePosition=(e)=>{
       
       setX(e.clientX)
       setY(e.clientY)
   }

    useEffect(()=>{
        console.log("UseEffect called");
        window.addEventListener('mousemove',logMousePosition)
        return()=>{
         window.removeEventListener('mousemove',logMousePosition)
        }
        //If a component is unmounted it does not React state update is not performed

    },[])
    
    return (
        <div>
            Hooks -{X} {Y}
        </div>
    )
}

export default MouseHook;