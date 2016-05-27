import React from 'react'
import { mount } from 'enzyme'
import NotFound from './NotFound'

describe('component <NotFound />', () => {
  it('can render the component', () => {
    const wrapper = mount(<NotFound location={{ pathname: 'dummylocation' }} />)
    expect(wrapper.html().includes('dummylocation')).to.equal(true)
  })
})
