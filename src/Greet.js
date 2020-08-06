import React, { Component }  from 'react'
// import React  from 'react'

//props
//2 ways to destructure props in functional components
//1st way
// const Greet=props=>{
//     const {name,profession}=props;
//   return(
//      <div>The name is {name} and profession is {profession} </div>
//     )
// }
//2nd way
// const Greet=({name,profession})=>{
  
//   return(
//      <div>The name is {name} and profession is {profession} </div>
//     )
// }
//2 ways of destructuring props in Class components 
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
        const {message}=this.state
     const {
         name,
         profession
     } = this.props
  
        return(
               <div>
           <h1>{name} is my name and profession is {profession}</h1>
        <p>{message}</p>
     
       
   
        </div>

        )
    }
}
export default Greet;