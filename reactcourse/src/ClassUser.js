const { Component } = require("react");


class User extends Component{
    constructor(props){
         super()
        this.state={
            name:"Tanzim"
        }
        //To update a state 
        
    }
    // updateName(){
    //     this.setState({name:'Tanzim Ibthesam'})
    // }
  render(){
      return(
          <div>
              <h1>Hello from User-{this.state.name}</h1>
              <p>The props is-{this.props.fullName}</p>
              <button onClick={()=>this.props.updateName()}>Change Name</button>
          </div>
      )
  }

}

export default User