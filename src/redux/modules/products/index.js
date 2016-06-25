import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from './actions'

const noProduct = (product) => (!product || !product.id)
const getPosition = (list, id) => list.findIndex(i => i.id === id)
const inList = (list, product) => list.filter(i => i.id === product.id).length > 0

const initialState = {
  isValid: false,
  items: []
}

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
