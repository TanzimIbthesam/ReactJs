const { Component } = require("react");


class ClassUserTwo extends Component{
  
constructor(props){
    super()
    // console.log(props);
    this.state={
        // name:"Tanzim",
        count:0,
       
    }
     
} 
//   updateName(){
//       this.setState({name:'Tanzim Ibthesam'})
//   }
  updateCount(){
      this.setState({count:this.state.count+1})
  }
   componentDidMount(){
       console.log("component did mount");
   }
  
   componentDidUpdate(){
       console.log("Component did update");
   }
   shouldComponentUpdate(){
       console.log("Should component update",this.state.count);
    //    return true;
    //If we want to stop counting when value of count is greater than 5 
    if(this.state.count>5){
        return false
    }else{
        return true
    }
    
   }
   componentWillUnmount(){
       console.log("Component Unmounted");
   }

  render(){
    //   console.log("Component rendered");
      return(
          <div>
             Hello
              Count-{this.state.count}
              {/* <button onClick={()=>this.updateName()}>Update name</button> */}
              <button onClick={()=>this.updateCount()}>Update count</button>
               
          </div>
      )
  }

}

export default ClassUserTwo