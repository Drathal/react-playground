import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from 'reducer/ActionTypes'
import { default as products } from './products'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
    case SET_PRODUCTS:
      return {
        items: products(state.items, action)
      }

    default:
      return state
  }
}
