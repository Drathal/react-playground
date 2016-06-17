import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-intl-redux'
import configureStore from 'redux-mock-store'
import Layout from './Layout'

const store = configureStore()({ intl: { locale: 'en' } })

describe('component <Layout />', () => {
  it('can render Layout Main', () => {
    const wrapper = mount(<Provider store={store}>
      <Layout params={{ layout: 'main' }} children={'test child'} />
    </Provider>)
    expect(wrapper.html().includes('layout layout-main')).to.equal(true)
    expect(wrapper.html().includes('test child')).to.equal(true)
  })

  it('can render Layout Dashboard', () => {
    const wrapper = mount(<Provider store={store}>
      <Layout params={{ layout: 'dashboard' }} children={'test child'} />
    </Provider>)
    expect(wrapper.html().includes('layout layout-dashboard')).to.equal(true)
    expect(wrapper.html().includes('test child')).to.equal(true)
  })
})
