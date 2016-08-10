import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import Students from '../components/Students'

test('Students creates one Student for each element', t => {
  const studentList = [{}, {}]
  const wrapper = shallow(<Students studentList={studentList} />)
  const expected = studentList.length
  const actual = wrapper.find('Student').length
  t.is(actual, expected)
})
