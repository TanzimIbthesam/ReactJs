import { Component } from "react";

class Test extends Component {
    componentWillUnmount(){
        console.log("Component Unmounted");
        console.log(data);
    }
   render(){
       
       return(
           <div>
               <h1>Test returned</h1>
           </div>
       )
   }
    

}

export default Test;