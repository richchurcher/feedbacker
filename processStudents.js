export function processStudents (rows, config) {
  // First four rows are metadata
  const students = rows.slice(5)
  const columns = rows[0].map(column => {
    return simplifyKey(column, config.shortforms)
  })

  return students
    .map(student => {
      return processStudent(student, columns)
    })
    .map(student => {
      return collapseColumns(student, config.collapseColumns)
    })
}

export function processStudent (values, columns) {
  return columns.reduce((student, column, i) => {
    student[column] = values[i]
    return student
  }, {})
}

export function simplifyKey (key, shortforms) {
  if (shortforms) {
    return shortforms.hasOwnProperty(key) ? shortforms[key] : key
  }
  return key
}

// Consolidate values from two columns if one is empty string
export function collapseColumns (student, columns) {
  const collapsed = Object.assign({}, student)
  for (const discard in columns) {
    const keep = columns[discard]
    if (student.hasOwnProperty(keep) && student.hasOwnProperty(discard)) {
      collapsed[keep] = student[keep] === '' ? student[discard] : student[keep]
      delete collapsed[discard]
    }
  }
  return collapsed
}
