import React from 'react'
import login from '../api/auth'
import loadSheet from '../api/sheets'
import {processStudents} from '../processStudents'

export default React.createClass({
  getInitialState () {
    return {
      error: '',
      students: []
    }
  },

  componentDidMount () {
    this.serverRequest = login((err, sheet) => {
      if (err) {
        this.setState({
          error: err.message
        })
      }
      loadSheet((err, sheet) => {
        const students = processStudents(sheet)
        this.setState({
          error: err,
          students: students
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
