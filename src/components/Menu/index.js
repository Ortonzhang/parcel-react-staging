import React, {Component} from 'react'
import style from './index.scss'
export default class Menus extends Component{
  constructor(props){
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  click = (path) => {
    this.props.history.location.pathname !== path && this.props.history.push({pathname: path})
  }

  render(){
    let { pathname } = this.props.history.location
    return(
      <ul className={style['menus']}>
          <li onClick={() => this.click('/')} className={pathname === '/' ? 'selected' : ''}>/</li>
          <li onClick={() => this.click('/test')} className={pathname === '/test' ? 'selected' : ''}>/test</li>
      </ul>
    )
  }

}