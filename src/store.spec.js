import { expect } from 'chai'
import makeStore from './store'
import * as productAction from './redux/modules/products/actions'

describe('store', () => {
  const product1 = { id: 1, description: 'product 1' }
  const product2 = { id: 2, description: 'product 2' }
  const product3 = { id: 3, description: 'product 3' }

  it('can dispatch product actions', () => {
    const store = makeStore()
    const stateBefore = []
    const stateAfter = [{ ...product1 }, { ...product2 }]

    expect(store.getState().products).to.deep.equal(stateBefore)

    store.dispatch(productAction.addProduct(product1))
    store.dispatch(productAction.addProduct(product2))
    store.dispatch(productAction.addProduct(product2))
    store.dispatch(productAction.addProduct(product3))
    store.dispatch(productAction.deleteProduct(product3.id))

    expect(store.getState().products).to.deep.equal(stateAfter)
  })
})
