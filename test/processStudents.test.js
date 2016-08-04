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

test('getColumns returns the first array in values', t => {
  const sheet = {
    values: [
      ['one', 'two', 'three']
    ]
  }
  const expected = ['one', 'two', 'three']
  const actual = students.getColumns(sheet)
  t.deepEqual(actual, expected)
})

test('processStudents returns an object for each array in values', t => {
  const sheet = {
    values: [
      ['one', 'two', 'three'],
      [], [], [], [],
      ['flargle', 'argle', 'wargle'],
      ['bargle', 'dargle', 'yargle']
    ]
  }
  const expected = [
    { 'one': 'flargle', 'two': 'argle', 'three': 'wargle' },
    { 'one': 'bargle', 'two': 'dargle', 'three': 'yargle' }
  ]
  const actual = students.processStudents(sheet)
  t.deepEqual(actual, expected)
})
