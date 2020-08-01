// import React, { Component }  from 'react'
import React, { Component }  from 'react'

//props
// const Greet=props=>{
//     this.state({
//         message:'Hello World'
//     })
//     return(
     
//     )
// }
class Greet extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Subscription is open'
        }
    }
    subscribeMessage(){
      this.setState({
          message:'You are subscribed'
      })
    }
    render(){
     
        return(
               <div>
           <h1>{this.props.name} is my name and profession is {this.props.profession}</h1>
        <p>{this.state.message}</p>
        <button onClick={()=>this.subscribeMessage()}>Subscribe To us</button>
   
        </div>

        )
    }
}
export default Greet;