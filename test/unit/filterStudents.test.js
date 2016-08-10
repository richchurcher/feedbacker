import test from 'ava'

import * as filter from '../filterStudents'

test('byName returns correct students', t => {
  const students = [
    { name: 'Wombat Aardvark' },
    { name: 'Wombat Jerboa' },
    { name: 'Kinkajou Nyala' }
  ]
  const expected = [
    { name: 'Wombat Jerboa' }
  ]
  const actual = filter.byName('Wombat Jerboa', students)
  t.deepEqual(actual, expected)
})
