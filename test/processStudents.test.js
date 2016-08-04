import test from 'ava'

import * as students from '../processStudents'

test('processStudent translates strings to property values', t => {
  const columns = ['one', 'two', 'three']
  const values = ['flargle', 'argle', 'wargle']
  const expected = {
    one: 'flargle',
    two: 'argle',
    three: 'wargle'
  }
  const actual = students.processStudent(columns, values)
  t.deepEqual(actual, expected)
})

test('processStudents returns an object for each array in values', t => {
  const rows = [
      ['one', 'two', 'three'],
      [], [], [], [],
      ['flargle', 'argle', 'wargle'],
      ['bargle', 'dargle', 'yargle']
    ]
  const expected = [
    { 'one': 'flargle', 'two': 'argle', 'three': 'wargle' },
    { 'one': 'bargle', 'two': 'dargle', 'three': 'yargle' }
  ]
  const actual = students.processStudents(rows)
  t.deepEqual(actual, expected)
})
