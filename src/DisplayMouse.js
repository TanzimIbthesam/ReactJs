import { useState } from "react"
import MouseHook from './MouseHook'
const DisplayMouse=()=>{
    const [display,setDisplay]=useState(true);
    const showMouse=()=>{
        setDisplay(!display)
    }
     return (
         <div>
             <button onClick={()=>showMouse()}>Show Mouse Over</button>
            {display && <MouseHook />}
         </div>
     )


}

export default DisplayMouse;