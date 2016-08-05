import React, {PropTypes} from 'react'

const Student = props => {
  return (
    <div>
      {props.row['name']}
      <ul>
        {Object.keys(props.row).map((field, i) => <li key={i}>{props.row[field]}</li>)}
      </ul>
    </div>
  )
}
export default Student
