import React, { forwardRef } from "react";

const User=(props,inputRef)=>{
 return (
<>
<input ref={inputRef} />
</>
 )

}
export default forwardRef(User);