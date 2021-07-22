import React from "react";

class User extends React.PureComponent{
    constructor(props){
        super()
        console.log(props);
      }
       render(){
         console.log("Rerender");
         return(
           <>
                
               <p>{this.props.count}</p>
           </>
         )
       }
    
    
    }
export default User;