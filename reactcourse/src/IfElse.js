import { useState } from 'react';

const IfElse=()=>{
    //Multiple if else
    const [age,Setage]=useState(7)
//   if(age>10){
//     return(
//       <div>Age is a lot</div>
//     )
//   }else if(age<=10){
//     return(
//       <div>Age is ok</div>
//     )
//   }else{
//     return(
//       <div>Age is too less</div>
//     )
//   }
//Simple If else
return (
    <div>
     {age>10 ?
     <h1>Welcome User 1</h1>
     :age>8?<h1>Welcome User2</h1>
     :<h1>Less Age</h1>
     
     }
 </div>

  );
}

export default IfElse;