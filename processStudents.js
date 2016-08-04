export function processStudent (columns, values) {
  return columns.reduce((student, column, i) => {
    student[column] = values[i]
    return student
  }, {})
}

export function getColumns (sheet) {
  return sheet.values[0]
}

export function processStudents (sheet) {
  const columns = getColumns(sheet)
  // First four rows are metadata
  const rows = sheet.values.splice(5)
  return rows.map(row => {
    return processStudent(columns, row)
  })
}
