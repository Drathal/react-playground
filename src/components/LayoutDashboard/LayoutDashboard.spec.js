import React from 'react'
import { mount } from 'enzyme'
import LayoutDashboard from './LayoutDashboard'

describe('component <LayoutDashboard />', () => {
  it('can render childs', () => {
    const wrapper = mount(<LayoutDashboard children="childs" />)
    expect(wrapper.html().includes('childs')).to.equal(true)
  })
})
