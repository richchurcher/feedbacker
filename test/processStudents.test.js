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

test('simplifyKeys translates keys but not values', t => {
  const shortforms = { 'long prop one': 'one', 'long prop two': 'two', 'long prop three': 'three' }
  const student = { 'long prop one': 1, 'long prop two': 2, 'long prop three': 3 }
  const expected = { 'one': 1, 'two': 2, 'three': 3 }
  const actual = students.simplifyKeys(student, shortforms)
  t.deepEqual(actual, expected)
})

test('collapseColumns consolidates values of multiple pairs of property names', t => {
  const collapseColumns = { one: 'two', three: 'four' }
  const student = { one: '', two: 'wombat', three: 'aardvark', four: '' }
  const expected = { two: 'wombat', four: 'aardvark' }
  const actual = students.collapseColumns(student, collapseColumns)
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
