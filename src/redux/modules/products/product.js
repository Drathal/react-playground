import { ADD_PRODUCT } from '../constants'

const noProduct = (product) => (!product || !product.id)

const product = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (noProduct(action.product)) return state
      return {
        id: action.product.id,
        name: action.product.name || '',
        description: action.product.description || '',
        productImage: action.product.productImage || ''
      }
    default:
      return state
  }
}

export default product
