/* eslint global-require: "off" */
process.env.BABEL_DISABLE_CACHE = 1
process.env.BABEL_ENV = process.env.NODE_ENV = 'test'
const Fs = require('fs')
const Path = require('path')
const babelConfiguration = JSON.parse(Fs.readFileSync(Path.join(__dirname, '.babelrc')))
babelConfiguration.babel = require('babel-core')

module.exports = (wallaby) => {
  return {
    files: [
      { pattern: 'test/helper.js' },
      { pattern: 'src/**/*.js' },
      { pattern: '!src/**/*.spec.js' }
    ],
    tests: [
      { pattern: 'src/**/*.spec.js' },
    ],
    compilers: {
      'src/**/*.js': wallaby.compilers.babel(babelConfiguration)
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    bootstrap() {
      require('./test/helper.js')
    },
    debug: false
  }
}
