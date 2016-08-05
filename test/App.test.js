import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import App from '../components/App'

test('App contains Students', t => {
  const wrapper = shallow(<App />)
  const expected = 1
  const actual = wrapper.find('Students').length
  t.is(actual, expected)
})
