import React, {
    Component
} from 'react'
// import React from 'react'

// class Welcome extends Component{
//     render(){
//      return   React.createElement('div',null,'Hello World');
//     }
  
              
    
   
// }
// const Welcome=(props)=>{
//     // return React.createElement('h1' ,null, 'Hello World' );
// return <h1>Hello my name is {props.name} </h1>

// }
class Welcome extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             message:'',
             subscriptionmessage:'You are subscribed'
        }
    }
    newMessage(){
        this.setState({
         message: 'You are subscribed'
        })

    }
    
    render(){
    return(
         <div>
             <p>{this.state.message}</p>
    < h1 > My name is {this.props.name} </h1>
    <button onClick={()=>this.newMessage()}>Subscribe</button>
    </div>

    )
   
    
    }
}
export default Welcome