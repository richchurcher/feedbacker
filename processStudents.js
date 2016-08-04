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
