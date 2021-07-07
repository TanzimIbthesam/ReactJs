import { useReducer } from "react";
const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
        return state+1;
        case 'decrement':
        return state-1;
        case 'reset':
        return initialState;
         default :
         return state
         

    }
}
const CounterOne=()=>{
 const [count,dispatch]=useReducer(reducer,initialState)
 return(
     <div>
         <button onClick={()=>dispatch('increment')}>Increase</button>
         <button onClick={()=>dispatch('decrement')}>Decrease</button>
         <button onClick={()=>dispatch('reset')}>Reset</button>
         Incraese Counter-{count}
     </div>
 )

}


export default CounterOne;