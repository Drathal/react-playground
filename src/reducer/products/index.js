import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from 'reducer/ActionTypes'
import products from './products'

const initialState = {
  isValid: false,
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
    case SET_PRODUCTS:
      return {
        isValid: true,
        items: products(state.items, action)
      }

    default:
      return state
  }
}
