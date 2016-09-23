import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { injectIntl, defineMessages } from 'react-intl'

import * as productActions from 'src/reducer/products/actions'
import { actions as sagaActions } from 'src/sagas/fetchProducts'
import ProductItem from 'components/ProductItem'
import ProductsList from 'components/ProductList'

const m = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Products',
    description: 'boooooring',
  },
  addProduct: {
    id: 'addProduct',
    defaultMessage: 'Add a random product',
    description: 'This translation is defined in a defineMessage.',
  },
  deleteProductButton: {
    id: 'deleteProductButton',
    defaultMessage: 'Delete',
    description: 'This translation is defined in a defineMessage.',
  },
  addToCartButton: {
    id: 'addToCartButton',
    defaultMessage: 'Buy',
    description: 'This translation is also defined in a defineMessage.',
  },
  noProduct: {
    id: 'noProduct',
    defaultMessage: 'No Products',
    description: 'description',
  }
})

const createRandomProduct = () => {
  const id = Math.floor((Math.random() * (100 - 5)) + 5)
  return { id, description: `product ${id}` }
}

class ProductListContainer extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { addProduct, deleteProduct, ...props } = this.props
    const t = props.intl.formatMessage

    const ProductItems = props.products.map((product) => (<ProductItem
      key={product.id}
      messages={{
        deleteProductButton: t(m.deleteProductButton),
        addToCartButton: t(m.addToCartButton)
      }}
      deleteProduct={deleteProduct}
      {...{ product }}
    />))

    return (<ProductsList {...props}
      count={ProductItems.length}
      messages={{
        title: t(m.title),
        addProduct: t(m.addProduct)
      }}
      addProduct={() => addProduct(createRandomProduct())}>
      {ProductItems.length > 0 ? ProductItems : <h4>{t(m.noProduct)}</h4>}
    </ProductsList>)
  }
}

ProductListContainer.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

ProductListContainer = connect(
    (state) => ({
      products: state.products
    }),
  {
    ...productActions,
    fetchProducts: sagaActions.fetch
  }
)(ProductListContainer)

export default injectIntl(ProductListContainer)
