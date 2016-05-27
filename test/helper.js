const chai = require('chai')
const sinonChai = require('sinon-chai')
const jsdom = require('jsdom').jsdom

var pe = require('pretty-error').start()
pe.skipPackage('mocha', 'babel-register')
pe.skipNodeFiles()
pe.skipPath('internal/module.js')

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = { userAgent: 'node.js' }
global.expect = chai.expect
global.sinon = require('sinon')
chai.use(sinonChai)
