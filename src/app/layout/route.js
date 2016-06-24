export default {
  path: ':layout',
  getComponent(location, cb) {
    require.ensure([], (require) => cb(null, require(`./layout_${location.params.layout}/index.js`).default), 'layout')
    // System.import('./layout').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  },
  indexRoute: {
    onEnter: (nextState, replace) => {
      replace(`/${nextState.params.layout}/products`)
    }
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => cb(null, require('../products/route').default), 'products-route')
    // System.import('../products/route').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  }
}
