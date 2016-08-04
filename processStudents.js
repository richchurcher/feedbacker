export function processStudent (columns, values) {
  return columns.reduce((student, column, i) => {
    student[column] = values[i]
    return student
  }, {})
}

export function processStudents (rows) {
  // First four rows are metadata
  const students = rows.slice(5)
  return students.map(row => {
    return processStudent(rows[0], row)
  })
}

export function simplifyKeys (student, shortforms) {
  const simplified = {}
  for (const key in student) {
    if (shortforms.hasOwnProperty(key)) {
      const newKey = shortforms[key]
      simplified[newKey] = student[key]
    }
  }
  return simplified
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
