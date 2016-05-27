import React from 'react'
import { render } from 'enzyme'
import ProductItem from '../ProductItem'

describe('component <ProductItem />', () => {
  it('can render a product', () => {
    const product = { id: 777, description: 'product description' }
    const ProductItemRender = render(<ProductItem product={product} />)
    expect(ProductItemRender.html().includes(product.description)).to.equal(true)
    expect(ProductItemRender.html().includes(product.id)).to.equal(true)
  })
})
