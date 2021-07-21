import { useEffect } from "react";

const PropsUseEffect=(props)=>{
    
        useEffect(()=>{
            console.log("Clicked"+props.increaseCount);
          },[props.increaseCount])
 
    return(
        <div>
            <h1>{props.count}</h1>
            <h1>{props.increaseCount}</h1>
        </div>
    )

}

export default PropsUseEffect;