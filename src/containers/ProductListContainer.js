import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import config from '../../config/default.json'
import * as productAPi from '../api/product'

import ProductsList from '../components/ProductList'
import * as productActions from '../redux/modules/products/actions'

import ProductItem from '../components/ProductItem'

// refactor langalue loading later
import * as i18n from '../translation/i18n'
i18n.addTranslation(require('../translation/de_DE.po'))

const createRandomProduct = () => {
  const id = Math.floor(Math.random() * (100 - 5) + 5)
  return { id, description: `product ${id}` }
}

class ProductListContainer extends Component {
  componentDidMount() {
    const { setProducts } = this.props
    productAPi.get(config.endpoint.productApi).then(response => setProducts(response))
  }

  render() {
    const messages = {
      title: i18n.gettext('Products'),
      addProduct: i18n.gettext('Add a random product')
    }
    const productMessages = {
      deleteProductButton: i18n.gettext('Delete'),
      addToCartButton: i18n.gettext('Buy')
    }
    const { addProduct, deleteProduct, ...props } = this.props
    const ProductItems = props.products.map((product) => <ProductItem
      key={product.id}
      messages={productMessages}
      deleteProduct={deleteProduct}
      { ...{ product } }
    />)

    return (<ProductsList {...props}
      count={ProductItems.length}
      messages={messages}
      addProduct={() => addProduct(createRandomProduct())}>
      {ProductItems.length > 0 ? ProductItems : <h4>{i18n.gettext('No Products')}</h4>}
    </ProductsList>)
  }
}

ProductListContainer.propTypes = {
  setProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

ProductListContainer = connect(
    (state) => ({
      products: state.products
    }),
    productActions
)(ProductListContainer)

export default ProductListContainer
