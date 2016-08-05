import React, {PropTypes} from 'react'

import Student from './Student'
import {byName} from '../filterStudents'

export default React.createClass({
  render () {
    let list = this.props.studentList
    if (this.props.params.name) {
      list = byName(decodeURIComponent(this.props.params.name), list)
    }
    const students = list.map((student, i) => {
      return (
        <Student key={i} row={student} />
      )
    })
    return (<div>{students}</div>)
  }
})
