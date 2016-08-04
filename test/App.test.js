import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import App from '../components/App'

test('App shallow correct', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.contains(''), false)
})
