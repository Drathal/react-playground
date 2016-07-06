import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { injectIntl, defineMessages } from 'react-intl'
import * as productAPi from '../../service/product'
// import ProductItem from '../../components/ProductItem'
// import ProductsList from '../../components/ProductList'
// import * as productActions from '../../reducer/products/actions'

import * as productActions from 'src/reducer/products/actions'
import ProductItem from 'components/ProductItem'
import ProductsList from 'components/ProductList'

const m = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Products',
    description: '5boooooring',
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
  const id = Math.floor(Math.random() * (100 - 5) + 5)
  return { id, description: `product ${id}` }
}

class ProductListContainer extends Component {

  componentDidMount() {
    const { setProducts, shouldLoadProducts } = this.props
    if (shouldLoadProducts) {
      productAPi.get(process.env.PRODUCT_SERVICE_URL).then(response => setProducts(response))
    }
  }

  render() {
    const { addProduct, deleteProduct, ...props } = this.props
    const t = props.intl.formatMessage

    const ProductItems = props.products.map((product) => <ProductItem
      key={product.id}
      messages={{
        deleteProductButton: t(m.deleteProductButton),
        addToCartButton: t(m.addToCartButton)
      }}
      deleteProduct={deleteProduct}
      {...{ product }}
    />)

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
  shouldLoadProducts: PropTypes.bool.isRequired,
  setProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

ProductListContainer = connect(
    (state) => ({
      products: state.products.items,
      shouldLoadProducts: !state.products.isValid
    }),
    productActions
)(ProductListContainer)

export default injectIntl(ProductListContainer)
