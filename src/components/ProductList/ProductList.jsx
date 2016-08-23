import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import style from './ProductList.css'

const ProductList = ({ addProduct, messages, children, count }) =>
  <div className={`productsWrapper ${style.productsWrapper}`}>
    <h2>{messages.title}</h2>
    {count < 5 || !count ?
      <Button className={`addProduct ${style.addProductButton}`} onClick={addProduct}>
        <span className={'material-icons dp16'}>build</span>{' '}{messages.addProduct}
      </Button>
      : null}
    <div className={style.products}>
      {children}
    </div>
  </div>

ProductList.propTypes = {
  messages: PropTypes.shape({
    addProduct: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  count: PropTypes.number,
  children: PropTypes.node,
  addProduct: PropTypes.func
}

/* istanbul ignore next */
ProductList.defaultProps = {
  addProduct: () => {}
}

export default ProductList
