import React from 'react'
import {checkAuth} from '../api/sheets.js'

export default React.createClass({
  getInitialState () {
    checkAuth()
    return {}
  },

  render () {
    return (
      <div>
        So much feedback.
      </div>
    )
  }
})
