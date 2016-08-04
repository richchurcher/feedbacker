import React, {PropTypes} from 'react'

export default React.createClass({
  render () {
    const students = this.props.studentList.map((student, i) => {
      return (
        <div key={i}>
          STUDENT
        </div>
      )
    })
    return (<div>{students}</div>)
  }
})
