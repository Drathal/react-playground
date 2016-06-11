import React from 'react'
import { mount } from 'enzyme'
import ProductList from './ProductList'

describe('component <ProductList />', () => {
  const messages = {
    title: 'title',
    addProduct: 'add Products'
  }
  const onAddProduct = sinon.spy()
  const wrapper = mount(<ProductList children={'childs'} messages={messages} addProduct={onAddProduct} />)

  it('can render a title', () => {
    expect(wrapper.html().includes(messages.title)).to.equal(true)
  })

  it('can render childs', () => {
    expect(wrapper.html().includes('childs')).to.equal(true)
  })

  it('can render a addProduct button', () => {
    expect(wrapper.html().includes(messages.addProduct)).to.equal(true)
  })

  it('can handle addProduct', () => {
    wrapper.find('.addProduct').simulate('click')
    expect(onAddProduct.calledOnce).to.equal(true)
  })
})
