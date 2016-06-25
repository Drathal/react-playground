import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import productsReducer from './index'
import { addProduct, deleteProduct, setProducts } from './actions'

describe('reducer products', () => {
  const product1 = { id: 1, description: 'product 1', name: 'product 1', productImage: 'a' }
  const product2 = { id: 2, description: 'product 2', name: 'product 2', productImage: 'b' }
  const product3 = { id: 3, description: 'product 3', name: 'product 3', productImage: 'c' }

  it('can add products', () => {
    const stateBefore = { isValid: false, items: [] }
    const action1 = addProduct(product1)
    const action2 = addProduct(product2)
    const stateAfter1 = { isValid: true, items: [{ ...product1 }] }
    const stateAfter2 = { isValid: true, items: [{ ...product1 }, { ...product2 }] }

    deepFreeze(stateBefore)
    deepFreeze(action1)
    deepFreeze(action2)

    expect(productsReducer(stateBefore, action1)).to.deep.equal(stateAfter1)
    expect(productsReducer(stateAfter1, action2)).to.deep.equal(stateAfter2)
  })

  it('can not add an existing product', () => {
    const stateBefore = { isValid: false, items: [] }
    const action1 = addProduct(product1)
    const action2 = addProduct(product2)
    const action3 = addProduct(product2)
    const stateAfter1 = { isValid: true, items: [{ ...product1 }] }
    const stateAfter2 = { isValid: true, items: [{ ...product1 }, { ...product2 }] }
    const stateAfter3 = { isValid: true, items: [{ ...product1 }, { ...product2 }] }

    deepFreeze(stateBefore)
    deepFreeze(action1)
    deepFreeze(action2)
    deepFreeze(action3)

    expect(productsReducer(stateBefore, action1)).to.deep.equal(stateAfter1)
    expect(productsReducer(stateAfter1, action2)).to.deep.equal(stateAfter2)
    expect(productsReducer(stateAfter2, action3)).to.deep.equal(stateAfter3)
  })

  it('can delete a product', () => {
    const stateBefore = { isValid: false, items: [{ ...product1 }] }
    const action = deleteProduct(1)
    const stateAfter = { isValid: true, items: [] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(productsReducer(stateBefore, action)).to.deep.equal(stateAfter)
  })

  it('can delete a product from many', () => {
    const stateBefore = { isValid: false, items: [{ ...product1 }, { ...product2 }, { ...product3 }] }
    const action = deleteProduct(3)
    const stateAfter = { isValid: true, items: [{ ...product1 }, { ...product2 }] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(productsReducer(stateBefore, action)).to.deep.equal(stateAfter)
  })

  it('can add many products', () => {
    const stateBefore = { isValid: false, items: [{ ...product2 }] }
    const action = setProducts([{ ...product1 }, { ...product2 }, { ...product3 }])
    const stateAfter = { isValid: true, items: [{ ...product1 }, { ...product2 }, { ...product3 }] }

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(productsReducer(stateBefore, action)).to.deep.equal(stateAfter)
  })
})
