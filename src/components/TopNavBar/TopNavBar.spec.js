import React from 'react'
import { shallow } from 'enzyme'
import TopNavBar from 'components/TopNavBar'

const brand = <div>brand</div>

describe('component <TopNavBar/>', () => {
  it('can render', function () {
    expect(shallow(<TopNavBar brand={brand}>#child#</TopNavBar>).html()).toMatchSnapshot(this)
  })
})
