import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import config from '../config/default.json'
import { addProduct } from './redux/modules/products/actions'
import { getProducts } from './api/product'
import Root from './root'
import configureStore from './store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

getProducts(config.endpoint.productApi).then(response => response.map(product => store.dispatch(addProduct(product))))

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      rootEl
    )
  })
}
