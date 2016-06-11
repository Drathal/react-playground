import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

import ProductItem from '../ProductItem'
import style from './style.scss'

const ProductList = ({ products, addProduct, deleteProduct, messages }) => {
  // move ProductItems List one level up into the container component
  const ProductItems = products.map((product) => <ProductItem key={product.id} { ...{ product, deleteProduct } } />)
  const noProducts = <h4>{messages.noProducts}</h4>

  return (<div className={`productsWrapper ${style.productsWrapper}`}>
    <h2>{messages.title}</h2>
    <Button className={`addProduct ${style.addProductButton}`} onClick={addProduct}>
    {messages.addProduct}
    </Button>
    <div className={style.products}>
      {products.length > 0 && ProductItems}
      {products.length === 0 && noProducts}
    </div>
  </div>)
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  messages: PropTypes.shape({
    noProducts: PropTypes.string.isRequired,
    addProduct: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  addProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
}

ProductList.defaultProps = {
  products: [],
  addProduct: () => {},
  deleteProduct: () => {}
}

export default ProductList
