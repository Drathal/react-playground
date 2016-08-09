import React, { PropTypes, Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-intl-redux'

import emptyRoute from './routefix'
import indexRoute from './app/route'

const routes = Object.assign(emptyRoute, indexRoute)

// use react component to fix react-hot-loader bug
const Root = class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={this.props.store}>
        <Router routes={routes} history={this.props.history} />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
