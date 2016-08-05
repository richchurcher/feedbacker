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

test('simplifyKey translates keys', t => {
  const shortforms = { 'long prop one': 'one', 'long prop two': 'two', 'long prop three': 'three' }
  const column = 'long prop one'
  const expected = 'one'
  const actual = students.simplifyKey(column, shortforms)
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
      ['long prop one', 'long prop two', 'long prop three'],
      [], [], [], [],
      ['flargle', 'argle', 'wargle'],
      ['bargle', 'dargle', 'yargle']
    ]
  const shortforms = { 'long prop one': 'one', 'long prop two': 'two', 'long prop three': 'three' }
  const expected = [
    { 'one': 'flargle', 'two': 'argle', 'three': 'wargle' },
    { 'one': 'bargle', 'two': 'dargle', 'three': 'yargle' }
  ]
  const actual = students.processStudents(rows, shortforms)
  t.deepEqual(actual, expected)
})
