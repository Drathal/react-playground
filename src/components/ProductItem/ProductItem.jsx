import React, { PropTypes } from 'react'
import { Button, Panel } from 'react-bootstrap'

import productPictureDefault from './dummyProduct.jpg'
import style from './ProductItem.css'

const component = ({ product, deleteProduct, addToCart, messages }) => {
  const productImage = product.productImage && product.productImage.length > 0 ?
    product.productImage :
    productPictureDefault

  const onError = (e) => {
    if (e && e.target) {
      // HACK:10 refactor - only a quick dirty demo
      e.target.src = productPictureDefault // eslint-disable-line
    }
  }

  return (<Panel header={product.description} bsStyle="primary" className={`product-${product.id} ${style.productCard}`} key={product.id}>
    <div className={`${style.imageWrapper}`}>
      <img onError={onError} alt={'product'} className={`product-image-${product.id} ${style.productImage}`} src={productImage} />
    </div>
    <Button className={`deleteProduct deleteProduct-${product.id} ${style.deleteProductButton}`} onClick={() => deleteProduct(product.id)}>
      {messages.deleteProductButton}
    </Button>
    <Button className={`addToCart addToCart-${product.id}`} onClick={() => addToCart(product)}>
       {messages.addToCartButton}
    </Button>
  </Panel>)
}

component.displayName = 'ProductItem'

component.propTypes = {
  messages: PropTypes.shape({
    deleteProductButton: PropTypes.string.isRequired,
    addToCartButton: PropTypes.string.isRequired
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  deleteProduct: PropTypes.func,
  addToCart: PropTypes.func
}

/* istanbul ignore next */
component.defaultProps = {
  product: {},
  deleteProduct: () => {},
  addToCart: () => {}
}

export default component
