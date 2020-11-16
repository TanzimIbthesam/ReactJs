
import React  from 'react';
import Images from  './components/Images';




class App extends React.Component{

constructor(props) {

  console.log("App Constructor");
  super(props)

 this.state={
   title:'New Image',
   isShowing:false,
 }

 
}






toggleButton=()=>{
  this.setState({isShowing:!this.state.isShowing});
}

componentDidMount (){
  console.log("Component did Mount");
  // this.setState({title:'Title changed'});
}
componentDidUpdate(){
  console.log("Component Updated");
}
  render() {
     console.log("App render");

 
    //state is react are immutable
    return(
       
      <section className="flex justify-center items-center">
      
            <div className="w-1/2">
              <div className="my-4 text-center">
                          <p className="text-2xl">{ this.state.title}</p> 
                   
                          <button 
                          className="bg-blue-800 text-white px-6 py-4 rounded-xl"
                          onClick={this.toggleButton}
                          alt="Toggle Image"
                          >Toggle Image</button>
                          <div>
                           
                          </div>
           
              </div>
                 {
                this.state.isShowing  ? (
                  <Images/>
             ):null
             }
                 
          
      
                 
             
            
 
        </div>
        
       
        
   
      </section>
    )
    
  }
}

 export default App;
