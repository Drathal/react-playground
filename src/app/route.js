export default {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/main') },
  getComponent(location, cb) {
    require.ensure([], (require) => cb(null, require('../app').default), 'app')
    // System.import('../app').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => cb(null, require('./layout/route').default), 'layout-route')
    // System.import('./layout/route').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  }
}
