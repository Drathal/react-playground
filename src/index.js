import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import configureStore from './store'
import IntlUtils from './translation/IntlUtils'
import Root from './root' // eslint-disable-line

// enable debug module in the browser
if (process.env.NODE_ENV === 'development') {
  window.myDebug = require('debug').enable('app:*')
}

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

  ReactDOM.render(<AppContainer>
    <Root store={store} history={history} />
  </AppContainer>, rootEl)

  // hot reloading
  if (module.hot) {
    module.hot.accept('./root', () => {
      const NextRoot = require('./root').default

      ReactDOM.render(<AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>, rootEl)
    })
  }
})
