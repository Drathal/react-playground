import React from 'react'
import { mount } from 'enzyme'
import Layout from './Layout'

describe('component <Layout />', () => {
  const children = <div>test child</div>
  it('can render Layout Main', () => {
    const wrapper = mount(<Layout params={{ layout: 'main' }} children={children} />)
    expect(wrapper.html().includes('layout layout-main')).to.equal(true)
    expect(wrapper.html().includes('test child')).to.equal(true)
  })
  it('can render Layout Dashboard', () => {
    const wrapper = mount(<Layout params={{ layout: 'dashboard' }} children={children} />)
    expect(wrapper.html().includes('layout layout-dashboard')).to.equal(true)
    expect(wrapper.html().includes('test child')).to.equal(true)
  })
})
