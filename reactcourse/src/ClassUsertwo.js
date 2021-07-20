const { Component } = require("react");


class ClassUserTwo extends Component{
  
constructor(props){
    super()
    console.log(props);
    this.state={
        name:"Tanzim"
    }
     
} 
  updateName(){
      this.setState({name:'Tanzim Ibthesam'})
  }
   componentDidMount(){
       console.log("component did mount");
   }
   componentDidNotMount(){
       console.log("component did not mount");
   }

  render(){
      console.log("Component rendered");
      return(
          <div>
              ClassUserTwo
              Name-{this.state.name}
              <button onClick={()=>this.updateName()}>Update name</button>
          </div>
      )
  }

}

export default ClassUserTwo