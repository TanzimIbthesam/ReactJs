
  import React, { Component } from 'react';
import Fruits from './Fruits'
// import Ninjas from './Ninjas'

class App extends Component {
  state = {
  fruits: [
         {name:'Apple',country:'Finland',price:5},   
         {name:'WaterMelon',country:'Austria',price:5},   
         {name:'Orange',country:'Venice',price:5}   
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Fruits fruits={this.state.fruits}/>
      </div>
    );
  }
}



// class App extends Component {
//   state = {
//     ninjas: [
//       { name: 'Ryu', age: 30, belt: 'black' },
//       { name: 'Yoshi', age: 20, belt: 'green' },
//       { name: 'Crystal', age: 25, belt: 'pink' }
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>My first React app</h1>
//         <Ninjas ninjas={this.state.ninjas}/>
//       </div>
//     );
//   }
// }

export default App;



