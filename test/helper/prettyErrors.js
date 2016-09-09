const PrettyError = require('pretty-error')

module.exports = () => {
  const pe = PrettyError.start()
  pe.skipPackage('mocha', 'power-assert', 'empower-core', 'chai', 'dirty-chai')
  pe.skipNodeFiles()
  pe.skipPath('internal/module.js')
  pe.skipPath('toMatchSnapshot.js')
}
