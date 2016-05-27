import React from 'react'
import { mount } from 'enzyme'
import LayoutMain from './LayoutMain'

describe('component <LayoutMain />', () => {
  it('can render childs', () => {
    const wrapper = mount(<LayoutMain children="childs" />)
    expect(wrapper.html().includes('childs')).to.equal(true)
  })
})
