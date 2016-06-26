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

    assert(ProductItemRender.html().includes(product.description) === true)
    assert(ProductItemRender.html().includes(product.id) === true)
    assert(ProductItemRender.html().includes(messages.deleteProductButton) === true)
    assert(ProductItemRender.html().includes(messages.addToCartButton) === true)
  })
})
