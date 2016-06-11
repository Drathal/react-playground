/* eslint global-require: "off" */
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
      'src/**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    bootstrap() {
      require('./test/helper.js')
    },
    debug: true
  }
}
