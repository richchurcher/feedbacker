import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import Students from './components/Students'
import Student from './components/Student'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='students' component={Students}>
        <Route path='students/:github' component={Student}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
