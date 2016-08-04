import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import Students from '../components/Students'

test('Students shallow correct', t => {
  const studentList = [{}, {}]
  const wrapper = shallow(<Students studentList={studentList} />)
  t.is(wrapper.contains(<div>STUDENT LIST</div>), true)
})

//test('Student shallow correct', t => {
  //const wrapper = shallow(<Student />)
  //t.is(wrapper.contains(<div>STUDENT DETAILS</div>), true)
//})
