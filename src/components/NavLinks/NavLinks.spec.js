import React from 'react'
import { shallow } from 'enzyme'
import NavLinks from 'components/NavLinks'

const links = [
  {
    title: 'link1',
    link: 'link1.html'
  },
  {
    title: 'link2',
    link: 'link2.html'
  }
]

describe('component <NavLinks />', () => {
  it('can render Navigation Links', () => {
    const wrapper = shallow(<NavLinks linkList={links} />)
    expect(wrapper.html().includes('link1')).to.equal(true)
    expect(wrapper.html().includes('link2')).to.equal(true)
  })
})
