import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('component <App />', () => {
  it('can render app wrapper', () => {
    const wrapper = mount(<App />)
    expect(wrapper.html().includes('class="app"')).to.equal(true)
  })
})
