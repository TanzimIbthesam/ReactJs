
// import React,{Component}  from 'react'
import React from 'react'

const Fruits=props=>{
  
    const { fruits} = props;
    const fruitsList = fruits.map((fruit,index) => {
      return (
        <div className="fruits-list" key={index}>
          <div>Name: { fruit.name }</div>
          <div>Country: { fruit.country }</div>
          <div>Price: { fruit.price }</div>
        </div>
      )
    });
    return (
      <div className="fruit-list">
        { fruitsList }
      </div>
    )
  }


export default Fruits