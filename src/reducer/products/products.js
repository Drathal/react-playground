import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from 'reducer/ActionTypes'
import product from './product'

export const getPosition = (list, id) => list.findIndex(i => i.id === id)
export const inList = (list, p) => list.filter(i => i.id === p.id).length > 0

const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (inList(state, action.product)) return state

      return [
        ...state,
        product(undefined, action)
      ]

    case DELETE_PRODUCT:
      const index = getPosition(state, action.id)
      if (index === -1) return state

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case SET_PRODUCTS:
      if (!action.products) return state
      action.products.filter(p => {
        if (!p.id) return false
        if (inList(state, p)) return false
        return true
      })

      return [
        ...action.products
      ]

    default:
      return state
  }
}

export default products
