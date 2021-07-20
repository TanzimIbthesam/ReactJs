


import React  from 'react';
import './App.css';
import ClassUserTwo from './ClassUsertwo';
// import ClassUserTwo from './ClassUsertwo';
import Test from './Test';

class App extends React.Component{
  //  const [name,setName]=useState("Tanzim");
  // const changeName=()=>{
  //   setName("Tanzim Ibthesam")
  // }
  constructor(props){
    super()
    // console.log(props);
    this.state={
        // name:"Tanzim",
        count:0,
        showButton:false
       
    }
     
}   
render(){
  return(
    <div>
      {/* <ClassUserTwo /> */}
      <button onClick={()=>this.setState({showHeading:!this.state.showHeading})}>Show heading</button>
              {this.state.showHeading ? <Test />: null}
    </div>
  )

}
 
}

export default App;
