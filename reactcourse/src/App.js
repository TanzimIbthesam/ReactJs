import React, {  PureComponent } from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'
 import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

class App extends PureComponent{
  //Pure Compoent is used for it to stop rerendering
  constructor(){
    super()
    this.state={
      count:0
    }
  }
   render(){
     console.log("Rerender");
     return(
       <>
          <User count={this.state.count} />
          <button onClick={()=>this.setState({count:1})}>Click</button> 
       </>
     )
   }


}



export default App;
