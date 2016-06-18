import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from './actions'

const initialState = {
  isValid: false,
  items: []
}

export default (state = initialState, action) => {
  const inList = product => state.items.filter(i => i.id === product.id).length > 0
  const getPosition = id => state.items.findIndex(i => i.id === id)

  switch (action.type) {

    case ADD_PRODUCT:
      if (!action.product || !action.product.id) return state
      if (inList(action.product)) return state
      return {
        isValid: true,
        items: [
          ...state.items,
          action.product
        ]
      }

    case DELETE_PRODUCT:
      const index = getPosition(action.id)
      if (index === -1) return state
      return {
        isValid: true,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      }

    case SET_PRODUCTS:
      if (!action.products) return state
      action.products.filter(p => {
        if (!p.id) return false
        if (inList(p)) return false
        return true
      })

      return {
        isValid: true,
        items: [
          ...action.products
        ]
      }

    default:
      return state

  }
}
