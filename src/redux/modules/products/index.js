import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from './actions'

export default (state = [], action) => {
  const inList = product => state.filter(i => i.id === product.id).length > 0
  const getPosition = id => state.findIndex(i => i.id === id)

  switch (action.type) {

    case ADD_PRODUCT:
      if (!action.product || !action.product.id) return state
      if (inList(action.product)) return state
      return [
        ...state,
        action.product
      ]

    case DELETE_PRODUCT:
      const index = getPosition(action.id)
      if (index === -1) return state
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case SET_PRODUCTS:
      if (!action.products) return state
      action.products.filter(p => {
        if (!p.id) return false
        if (inList(p)) return false
        return true
      })
      return [
        ...action.products
      ]

    default:
      return state

  }
}
