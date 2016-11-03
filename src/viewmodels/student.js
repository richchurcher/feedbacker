export function getStudent (sheet, search, next) {
  const student = sheet.find(student => {
    return student.name === search.name
  }) || null
  next(null, student)
}
