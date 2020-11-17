import React, { useEffect } from 'react'

export default function Images() {
    useEffect(() => {
        const interval=setInterval(() => {
         console.log("Hello");   
        }, 1000);
        
        return () => {
            console.log("Unmounted");
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
            <div>
                <img  className="" src="https://images.unsplash.com/photo-1605036927141-938ec066488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""></img>
           </div>
        </div>
    )
}


// import React, { Component } from 'react'

// export default class Images extends Component {
//   constructor(props) {
//       super(props);
  
     
//       this.state={
//           interval:null,
//       }
//   }
  
   
//     componentDidMount (){
      
        
//            this.setState({
//                interval:setInterval(() => {
//                console.log("Hello");
//           }, 1000),

//         });
          
// }
//  componentWillUnmount(){
//         console.log("Component will unmount");
//        clearInterval(this.state.interval);
    
//     }
//     render() {
//         return (
//             <div>
//                 <img  className="" src="https://images.unsplash.com/photo-1605036927141-938ec066488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""></img>
//             </div>
//         )
//     }
// }
