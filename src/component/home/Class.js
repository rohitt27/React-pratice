import React, { Component } from 'react'

export default class Class extends Component {
  constructor(){
    super()
    this.state={
      number:0 
    }
  }
    increment=()=>{   
      this.setState({number:this.state.number + 1});
    }
  
  render() {
    return (
      <div>
        <input type="number" className='border' value={this.state.number}  />
        {/* <p>Number:{this.state.number}</p> */}
        <button onClick={this.increment}>Add</button>
      </div>
    )
  } 
}
 