import test from 'ava'

import {getStudent} from '../viewmodels/student.js'

test('getStudent returns null if no match', t => {
  const sheet = [{}]
  getStudent(sheet, { name: 'Flargle Argle' }, (err, actual) => {
    t.error(err)
    t.deepEqual(actual, null)
  })
})

test('getStudent finds a student by name', t => {
  const expected = { name: 'Flargle Argle' }
  const sheet = { students: [ { name: 'Flargle Argle' } ] }
  getStudent(sheet.students, { name: 'Flargle Argle' }, (err, actual) => {
    t.error(err)
    t.deepEqual(actual, expected)
  })
})
