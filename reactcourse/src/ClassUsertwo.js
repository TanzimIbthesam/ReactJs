const { Component } = require("react");


class ClassUserTwo extends Component{
  
constructor(props){
    super()
    // console.log(props);
    this.state={
        // name:"Tanzim",
        count:0
    }
     
} 
//   updateName(){
//       this.setState({name:'Tanzim Ibthesam'})
//   }
  updateCount(){
      this.setState({count:1})
  }
   componentDidMount(){
       console.log("component did mount");
   }
  
//    componentDidUpdate(){
//        console.log("Component did update");
//    }
   componentDidUpdate(prevState){
       console.log("Component did update",prevState.count,this.state.count);
       if(prevState.count===this.state.count){
           console.log("data already same");
           this.setState({count:this.state.count+1})
       }
       //if done here then there will be infinite loop 
    //    this.setState({count:this.state.count+1})
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