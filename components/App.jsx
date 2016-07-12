import React from 'react'
import login from '../api/auth.js'
import loadSheet from '../api/sheets.js'

export default React.createClass({
  getInitialState () {
    login(loadSheet, (err, sheet) => {

    })
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
