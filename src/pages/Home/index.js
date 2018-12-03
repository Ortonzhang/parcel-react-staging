import React, { Component } from 'react'
import style from './index.scss'

export default class Home extends Component {
  constructor(){
    super()
    this.state = { couton: '1' }
  }

  test = () => {
    console.log(1111)
  }

  render(){
    return(
      <div className={style['box']} onClick={this.test}>
        {this.state.couton} 我的老家
      </div>
    )
  }
}
