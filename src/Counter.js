import { useState } from "react";

const Counter=()=>{
    const initialCount=0;
    const [count,setCounterOne]=useState(initialCount);

    const increaseCount=()=>{
        setCounterOne(prevCount=>prevCount+1)
    }
    const decreaseCount=()=>{
        setCounterOne(prevCount=>prevCount-1)
    }
    const resetCount=()=>{
        setCounterOne(initialCount)
    }
return(
    <div>
        <button onClick={increaseCount}>Increment</button>
        Count-{count}
        <button onClick={decreaseCount}>Increment</button>
        Decreasecount-{count}
        <button onClick={resetCount}>Reset</button>
        Reset-{count}
    </div>
)
}


export default Counter;