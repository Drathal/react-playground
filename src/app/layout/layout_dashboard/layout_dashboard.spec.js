import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-intl-redux'
import configureStore from 'redux-mock-store'
import LayoutDashboard from './layout_dashboard'

const store = configureStore()({ intl: { locale: 'en' } })

describe('container <LayoutDashboard />', () => {
  it('can render childs', function () {
    expect(shallow(<Provider store={store}><LayoutDashboard children="childs" /></Provider>).html()).toMatchSnapshot(this)
  })
})
