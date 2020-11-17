import React, { useState } from 'react'

export default function Counter() {
    const [count, isCounting] = useState(0);

  function  countIncrease(){
               isCounting(count+1);
    }
    return (
        <div>
                <p className="text-2xl">Count-{count}</p> 
             <button 
                          className="bg-teal-400 text-white px-6 py-4 rounded-md mt-2"
                          onClick={countIncrease}
                          alt="Count"
                          >Increase Count</button>
        </div>
    )
}
