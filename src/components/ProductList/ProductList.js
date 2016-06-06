import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

import ProductItem from '../ProductItem'
import style from './style.scss'

/*
const gettext = n => n
const dgettext = (n, p, v) => v

dgettext('Menu', 'Inbox', 'Inboxes')
gettext('test')
gettext('test again')
gettext('test')

const test2 = (<GetText
  message="One item"
  messagePlural="{{ count }} items"
  count="1"
  context="Cart"
  comment="The number of items added to the cart, fuzzy"
/>)
*/

const ProductList = ({ products, addRandomProduct, deleteProduct }) => {
  const ProductItems = products.map((product) => <ProductItem key={product.id} { ...{ product, deleteProduct } } />)
  const noProducts = <h4>{'noProducts'}</h4>

  return (<div className={`productsWrapper ${style.productsWrapper}`}>
    <h2>{'title'}</h2>
    <Button className={`addProduct ${style.addProductButton}`} onClick={addRandomProduct}>
    {'addProductButton'}
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
  addProduct: PropTypes.func,
  addRandomProduct: PropTypes.func,
  deleteProduct: PropTypes.func
}

ProductList.defaultProps = {
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
  addRandomProduct: () => {}
}

export default ProductList
