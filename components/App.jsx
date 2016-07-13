import React from 'react'
import login from '../api/auth.js'
import loadSheet from '../api/sheets.js'

export default React.createClass({
  getInitialState () {
    return {
      error: '',
      sheet: []
    }
  },

  componentDidMount () {
    this.serverRequest = login((err, sheet) => {
      loadSheet((err, sheet) => {
        this.setState({
          error: err,
          sheet: sheet
        })
      })
    })
  },

  componentWillUnmount () {
    this.serverRequest.abort()
  },

  render () {
    return (
      <div>
        So much feedback.
      </div>
    )
  }
})
