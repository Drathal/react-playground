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

describe('component <NavLinks />', function () {
  it('can render Navigation Links', function () {
    expect(shallow(<NavLinks linkList={links} />).html()).toMatchSnapshot(this)
  })
})
