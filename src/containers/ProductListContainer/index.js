import { connect } from 'react-redux'

import ProductsList from '../../components/ProductList'
import { addProduct, deleteProduct } from '../../redux/modules/products/actions'

export const createRandomProduct = () => {
  const id = Math.floor(Math.random() * (100 - 5) + 5)
  return { id, description: `product ${id}` }
}

export default connect(
    (state) => {
      return { products: state.products }
    },
    (dispatch) => {
      return {
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        addProduct: () => dispatch(addProduct(createRandomProduct()))
      }
    }
)(ProductsList)
