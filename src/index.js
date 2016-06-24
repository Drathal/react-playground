import 'babel-polyfill'
require('babel-runtime/core-js/promise').default = require('bluebird')

import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import Root from './root'
import configureStore from './store'
import IntlUtils from './translation/IntlUtils'

// enable debug module in the browser
if (process.env.NODE_ENV === 'development') {
  window.myDebug = require('debug').enable('app:*')
}

// load all needed locales then run
IntlUtils.loadLocale('en').then(result => {
  const initialState = {
    intl: {
      defaultLocale: 'en',
      locale: 'en',
      messages: result
    }
  }

  const store = configureStore(initialState)
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
      ReactDOM.render(
        <AppContainer>
          <Root store={store} history={history} />
        </AppContainer>,
        rootEl
      )
    })
  }
})
