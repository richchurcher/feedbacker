import React, {PropTypes} from 'react'

export default Student
const Student = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}
