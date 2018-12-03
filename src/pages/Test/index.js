import React, { Component } from 'react'

export default class Test extends Component {
  constructor(){
    super()
    this.state = { couton: '2' }
  }

  test = () => {
    console.log(1111)
  }

  render(){
    return(
      <div  onClick={this.test}>
        {this.state.couton} 我的老家
      </div>
    )
  }
}
