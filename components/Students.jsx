import React, {PropTypes} from 'react'

import Student from './Student'

export default React.createClass({
  render () {
    const students = this.props.studentList.map((student, i) => {
      return (
        <Student key={i} row={student} />
      )
    })
    return (<div>{students}</div>)
  }
})
