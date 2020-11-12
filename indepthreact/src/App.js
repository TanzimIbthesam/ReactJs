
import React from 'react';
//Using props in a functiona component
//  function App({title}){
//  return <div class="box">
//    Hello World fsdfdf-{  title}
//    </div>
// }



//class component 
class App extends React.Component{
  //props in class component
  constructor(props) {
    super(props)
  
    this.state = {
      name:'Tanzim'
       
    }
  }
  
  render() {
    return(
  
      <h1 class="text-2xl">Hello World-{this.props.title}</h1>
    )
    
  }
}

 export default App;
