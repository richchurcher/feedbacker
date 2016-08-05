import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import Students from './components/Students'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/students' component={Students}/>
      <Route path='/students/:name' component={Students}/>
    </Route>
  </Router>
), document.getElementById('app'))
