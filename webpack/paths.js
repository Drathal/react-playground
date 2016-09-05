const path = require('path')

module.exports = {
  build: path.join(__dirname, '../dist'),
  src: path.join(__dirname, '../src'),
  components: path.join(__dirname, '../src/components'),
  containers: path.join(__dirname, '../src/containers'),
  reducer: path.join(__dirname, '../src/reducer'),
  service: path.join(__dirname, '../src/service'),
  app: path.join(__dirname, '../src/app')
}
