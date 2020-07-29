

import React, { Component }  from 'react'
// import React, {
//   Component
// } from 'react'
import Greet from './Greet'
//functional components 

// function App(){
//   return(
//     <div>
//       <h1> <Greet/></h1>
//     </div>
//   )
// }
//fat arrow function
// const App=()=><Greet />
//
class App extends Component{
  render(){
    return(
      <Greet />
    )
  }
}


 export default App;

