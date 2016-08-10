import React from 'react'
import { shallow } from 'enzyme'
import NavLogin from 'components/NavLogin'

describe('component <NavLogin />', () => {
  it('can render a Login Navigation', function () {
    expect(shallow(<NavLogin />).html()).toMatchSnapshot(this)
  })
  it('can render a Login Navigation with localisation', function () {
    expect(shallow(<NavLogin messages={{ login: 'LI', logout: 'LO' }} />).html()).toMatchSnapshot(this)
  })
})
