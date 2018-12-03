import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Routers from './router'
class App extends Component {
  render(){
    return (
      <Routers />
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))