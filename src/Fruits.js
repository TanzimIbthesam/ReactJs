 import React, { Component } from 'react'

export default class Fruits extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
         const {
             name,
             country
         } = this.props;
        return (
            <div className="App">
               <h1>Name-{name}</h1>
               <h1>Country-{country}</h1>
            </div>
        )
    }
}
