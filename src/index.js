import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import Root from './root'
import configureStore from './store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
)

// hot reloading
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
