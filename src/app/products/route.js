export default {
  path: 'products',
  getComponent(location, cb) {
    require.ensure([], (require) => cb(null, require('../products').default), 'products')
    // System.import('./layout').then((m) => cb(null, m.default)).catch((err) => console.error(err))
  }
}
