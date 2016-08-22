import { getPosition } from './products'

export function getProduct(state, id) {
  return state.items[getPosition(state, id)]
}

export function getProducts(state) {
  return state.items
}
