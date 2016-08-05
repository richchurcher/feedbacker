import React from 'react'
import login from '../api/auth'
import loadSheet from '../api/sheets'
import {processStudents} from '../processStudents'
import Students from './Students'
import config from '../config.json'

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
        const students = processStudents(sheet, config.shortforms)
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
        <Students studentList={this.state.students} />
      </div>
    )
  }
})
