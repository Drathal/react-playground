import { put, call, take } from 'redux-saga/effects'
import { PRODUCTS_FETCH_REQUESTED, PRODUCTS_FETCH_FAILED } from 'reducer/ActionTypes'
import * as productActions from 'reducer/products/actions'
import * as productAPi from 'service/product'
import fetchProducts from './fetchProducts'

let generator
const error = { message: 'error' }

describe('saga fetchProducts', () => {
  before(() => {
    generator = fetchProducts('TEST_ENDPOINT')
  })

  it('can TAKE product/PRODUCTS_FETCH_REQUESTED', () => {
    assert.deepEqual(generator.next().value, take(PRODUCTS_FETCH_REQUESTED))
  })

  it('can CALL productAPi.get on TEST_ENDPOINT', () => {
    assert.deepEqual(generator.next().value, call(productAPi.get, 'TEST_ENDPOINT'))
  })

  it('can PUT productActions.setProducts with TEST_PRODUCTS', () => {
    assert.deepEqual(generator.next([]).value, put(productActions.setProducts([])))
  })

  it('can not TAKE another product/PRODUCTS_FETCH_REQUESTED', () => {
    assert.deepEqual(generator.next().value, undefined)
  })
})

describe('saga fetchProducts', () => {
  it('can CALL PRODUCTS_FETCH_FAILED on error', () => {
    generator = fetchProducts('TEST_ENDPOINT')
    generator.next()

    assert.deepEqual(
      generator.throw(error).value,
      put({ type: PRODUCTS_FETCH_FAILED, message: error.message })
    )
  })
})
