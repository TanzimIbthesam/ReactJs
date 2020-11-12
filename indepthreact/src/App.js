
import React  from 'react';





class App extends React.Component{

constructor(props) {
  super(props)

  this.state = {
     title:'New  Image ',
     isShowing:false,
    
  }
   this.toggleButton=this.toggleButton.bind(this)
}
//You must use a fat arrow function because in normal function scope of this is notavailable
//If you want to use you need to bind this
//  toggleButton=()=>{
//     this.setState({isShowing:!this.state.isShowing})
//  } 
toggleButton(){
    this.setState({isShowing:!this.state.isShowing})
}
  render() {
    

 
    //state is react are immutable
    return(
  
      <section className="flex justify-center items-center">
      
            <div className="w-1/2">
              <div className="my-4 text-center">
                          <p className="text-2xl">{ this.state.title}</p> 
                          <button 
                          className="bg-blue-800 text-white px-6 py-4 rounded-xl"
                        onClick={this.toggleButton}
                          
                          >Toggle Image</button>
              </div>
                 
             
           {
           
         this.state.isShowing  ? (
          <img  className="" src="https://images.unsplash.com/photo-1605036927141-938ec066488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="" alt=""></img>
             ):null
        
  }
                 
             
            
 
        </div>
        
       
        
   
      </section>
    )
    
  }
}

 export default App;
