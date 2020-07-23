
import React  from 'react'

const Fruits=(props)=>{
  
    const { fruits} = props;
    const fruitsList = fruits.map((fruit,index) => {
      return (
        <div className="fruits-list" key={index}>
          <div>Name: { fruit.name }</div>
          <div>Age: { fruit.country }</div>
          <div>Belt: { fruit.price }</div>
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