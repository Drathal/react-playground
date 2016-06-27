import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-intl-redux'
import emptyRoute from './routefix'
import indexRoute from './app/route'
const routes = Object.assign(emptyRoute, indexRoute)

// HACK: react-hot-reloader cannot hot update async modules
if (process.env.NODE_ENV !== 'production') {
  require('./hotloadfix')
}

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router {...{ routes, history }} />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
