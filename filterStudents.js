export function byName (search, students) {
  return students.filter(student => student.name === search)
}
