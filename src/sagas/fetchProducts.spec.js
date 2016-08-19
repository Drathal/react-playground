import { put, call, take } from 'redux-saga/effects'
import { PRODUCTS_FETCH_REQUESTED } from 'reducer/ActionTypes'
import * as productActions from 'reducer/products/actions'
import * as productAPi from 'service/product'
import fetchProducts from './fetchProducts'

let generator

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
    assert.deepEqual(generator.next('TEST_PRODUCTS').value, put(productActions.setProducts('TEST_PRODUCTS')))
  })

  it('can not TAKE another product/PRODUCTS_FETCH_REQUESTED', () => {
    assert.deepEqual(generator.next().value, undefined)
  })
})
