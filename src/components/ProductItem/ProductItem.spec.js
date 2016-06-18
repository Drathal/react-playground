import React from 'react'
import { render } from 'enzyme'
import ProductItem from './ProductItem'

describe('component <ProductItem />', () => {
  it('can render a product', () => {
    const messages = {
      deleteProductButton: 'deleteProductButton',
      addToCartButton: 'addToCartButton'
    }
    const product = { id: 777, description: 'product description' }
    const ProductItemRender = render(<ProductItem product={product} messages={messages} />)
    expect(ProductItemRender.html().includes(product.description)).to.equal(true)
    expect(ProductItemRender.html().includes(product.id)).to.equal(true)
    expect(ProductItemRender.html().includes(messages.deleteProductButton)).to.equal(true)
    expect(ProductItemRender.html().includes(messages.addToCartButton)).to.equal(true)
  })
})
