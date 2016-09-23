import { put, call, take } from 'redux-saga/effects'
import * as productActions from 'reducer/products/actions'
import * as productAPi from 'service/product'
import * as fetchProducts from './fetchProducts'

let generator
const error = { message: 'error' }

describe('saga fetchProducts', () => {
  before(() => {
    generator = fetchProducts.fetch('TEST_ENDPOINT')
  })

  it('can TAKE product/PRODUCTS_FETCH_REQUESTED', () => {
    assert.deepEqual(generator.next().value, take(fetchProducts.PRODUCTS_FETCH_REQUESTED))
  })

  it('can CALL productAPi.get on TEST_ENDPOINT', () => {
    assert.deepEqual(generator.next().value, call(productAPi.get, 'TEST_ENDPOINT'))
  })

  it('can PUT productActions.setProducts', () => {
    assert.deepEqual(generator.next([]).value, put(productActions.setProducts([])))
  })

  it('can not TAKE another action', () => {
    assert.deepEqual(generator.next().value, undefined)
  })
})

describe('saga fetchProducts', () => {
  it('can CALL PRODUCTS_FETCH_FAILED on error', () => {
    generator = fetchProducts.fetch('TEST_ENDPOINT')
    generator.next()

    assert.deepEqual(
      generator.throw(error).value,
      put({ type: fetchProducts.PRODUCTS_FETCH_FAILED, message: error.message })
    )
  })
})
