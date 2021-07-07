import { useReducer } from "react";
const initialState={
    firstCounter:0
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return {firstCounter:state.firstCounter+action.value};
        case 'decrement':
        return {firstCounter:state.firstCounter-action.value};;
        case 'reset':
        return initialState;
         default :
         return state
         

    }
}
const CounterTwo=()=>{
 const [count,dispatch]=useReducer(reducer,initialState)
 return(
     <div>
         <button onClick={()=>dispatch({type:'increment',value:1})}>Increase</button>
         <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrease</button>
         {/* To increase it by 5 */}
         <button onClick={()=>dispatch({type:'increment',value:5})}>Increase by 5</button>
         <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrease by 5</button>
        
         <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
         Counter-{count.firstCounter}
     </div>
 )

}


export default CounterTwo;