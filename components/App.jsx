import React from 'react'
import login from '../api/auth'
import loadSheet from '../api/sheets'
import {processStudents} from '../processStudents'
import Students from './Students'
import config from '../config.json'
import filter from '../filterStudents'
import {Link} from 'react-router'

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
        const students = processStudents(sheet, config)
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

  renderChildren () {
    return React.Children.map(this.props.children, child => {
      if (child.type === Students) {
        return React.cloneElement(child, { studentList: this.state.students })
      }
      return child
    })
  },

  render () {
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }
})
