import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import Students from '../components/Students'
import Student from '../components/Student'

test('Students shallow correct', t => {
  const studentList = [{}, {}]
  const wrapper = shallow(<Students studentList={studentList} />)
  const actual = wrapper.contains(<div></div>)
  t.is(actual, true)
})

test('Student shallow correct', t => {
  const student = {}
  const wrapper = shallow(<Student row={student} />)
  const actual = wrapper.contains(<div>STUDENT DETAILS</div>)
  t.is(actual, true)
})
