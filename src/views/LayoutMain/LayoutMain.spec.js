import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-intl-redux'
import configureStore from 'redux-mock-store'
import LayoutMain from './LayoutMain'

const store = configureStore()({ intl: { locale: 'en' } })

describe('component <LayoutMain />', () => {
  it('can render childs', () => {
    const wrapper = mount(<Provider store={store}><LayoutMain children="childs" /></Provider>)
    expect(wrapper.html().includes('childs')).to.equal(true)
  })
})
