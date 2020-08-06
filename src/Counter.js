import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
             count:0,
        }
    }
    increment(){

        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log('Callbackvalue',this.state.count);
        // })
        //The right way to get the result
        this.setState(prevState => ({    
                      count: prevState.count+1
        }))
        console.log(this.state.count);
                
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                 <button onClick={()=>this.incrementFive()}>Click here for more</button>
        <p>{this.state.count }</p>
            </div>
        )
    }
}
