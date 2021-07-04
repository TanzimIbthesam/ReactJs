import { useEffect, useState } from "react"

const Interval=()=>{
    const [count,SetCount]=useState(0)

    const tick=()=>{
        // SetCount(count+1)
        //If you write you dont need to pass argument as an array 
        SetCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
        // function something(){
        //         console.log(someProp);
        // }
        // something()
        const newinterval=setInterval(tick,1000)
        return ()=>{
            clearInterval(newinterval)
        }
    },[])
    return (
        <div> 
            Count is-{count}

    </div>

    )
    
}

export default Interval;