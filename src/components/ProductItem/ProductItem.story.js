import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import ProductItem from 'components/ProductItem/ProductItem.jsx'

const messages = {
  deleteProductButton: 'deleteProductButton',
  addToCartButton: 'addToCartButton'
}

const product = { id: 1, description: 'productDescription' }
const product2 = { id: 2, description: 'productDescription', productImage: 'http://lorempixel.com/200/200/technics/1' }

storiesOf('ProductItem')
  .addWithInfo('with default image', () => (
    <ProductItem
      product={product}
      messages={messages}
      deleteProduct={action('deleteProduct')}
      addToCart={action('addToCart')}
    />
  ), { inline: true, propTables: false })
  .addWithInfo('with custom image', () => (
    <ProductItem
      product={product2}
      messages={messages}
      deleteProduct={action('deleteProduct')}
      addToCart={action('addToCart')} />
  ), { inline: true, propTables: false })
