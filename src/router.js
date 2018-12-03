import React, {Component} from 'react'
import { 
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()

import Menus from './components/Menu'
import Home from './pages/Home'
import Test from './pages/Test'
export default class Routers extends Component {
  render(){
    return(
      <Router>
        <div style={Style['box']}>
          <Menus history={history}/>
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/test"  component={ Test }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const Style = {
  box: {
    width: '100%',
    display: 'flex',
    ppsition: 'relative'
  }
}