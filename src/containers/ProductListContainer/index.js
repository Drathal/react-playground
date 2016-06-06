import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import config from '../../../config/default.json'
import * as productAPi from '../../api/product'

import ProductsList from '../../components/ProductList'
import * as productActions from '../../redux/modules/products/actions'

class ProductListContainer extends Component {
  componentDidMount() {
    const { setProducts } = this.props
    productAPi.get(config.endpoint.productApi).then(response => setProducts(response))
  }

  render() {
    return <ProductsList {...this.props} />
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
