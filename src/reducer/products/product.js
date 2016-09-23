// @flow
import type {
  Product
} from './types'

import type {
  Action
} from '../../types'

import { ADD_PRODUCT } from './actions'

const initialState : Product = {
  id: 0,
  name: '',
  description: '',
  productImage: ''
}

const product = (state : Product = initialState, action : Action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
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
