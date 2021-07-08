import { useReducer } from "react";
const initialState={
    firstCounter:0,
    secondCounter:10
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return {...state,firstCounter:state.firstCounter+action.value};
        case 'decrement':
        return {...state,firstCounter:state.firstCounter-action.value};;
        case 'reset':
        case 'incrementtwo':
        return {...state,secondCounter:state.secondCounter+action.value};
        case 'decrementtwo':
        return {...state,secondCounter:state.secondCounter-action.value};;
        case 'resettwo':
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
         <button onClick={()=>dispatch({type:'incrementtwo',value:5})}>Increase Counter two</button>
         <button onClick={()=>dispatch({type:'decrementtwo',value:5})}>Decrease Counter Two</button>
        
         <button onClick={()=>dispatch({type:'resettwo'})}>Reset</button>
         FirstCounter-{count.firstCounter}
         secondCounter={count.secondCounter}
     </div>
 )

}


export default CounterTwo;