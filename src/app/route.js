import App from '../app'
import LayoutRoute from './layout/route'

export default {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/main') },
  component: App,
  childRoutes: [
    LayoutRoute
  ]
}

/*
  getChildRoutes(location, cb) {
    if (process.env.NODE_ENV === 'development') {
      cb(null, require('./layout/route').default)
    } else {
      require.ensure([], (require) => cb(null, require('./layout/route').default), 'layout-route')
    }
  }
*/
