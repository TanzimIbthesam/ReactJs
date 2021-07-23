import React, { createRef} from 'react';
import './App.css';
// import PropsUseEffect from './PropsUseEffect';
 
import 'bootstrap/dist/css/bootstrap.min.css'


//  import User from './User';

// import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
// import Test from './Test';

class App extends React.Component{
  constructor(){
    super()
    this.inputRef=createRef()
  }
  componentDidMount(){
    console.log(this.inputRef.current.value);
  }
   changeVal(){
       this.inputRef.current.style.color="red";
       this.inputRef.current.style.backgroundColor="black";
   }
  render(){
    return(
      <>
        <button onClick={()=>this.changeVal()}>Change Color</button> 
       <input type="text" ref={this.inputRef} />
      </>
    )
  }
}



export default App;
