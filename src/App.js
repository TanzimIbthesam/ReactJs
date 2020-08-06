

import React, { Component }  from 'react'
// import React, {
//   Component
// } from 'react'
// import Greet from './Greet'
import Counter from './Counter'
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
      // <Greet name="Tanzim" profession="Web developer" />
      <Counter />
    )
  }
}


 export default App;

