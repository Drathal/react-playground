require('babel-register')()

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const sinonChai = require('sinon-chai')
const jsdom = require('jsdom').jsdom
chai.use(dirtyChai)

const pe = require('pretty-error').start()
pe.skipPackage('mocha', 'babel-register', 'empower-core', 'babel-plugin-espower')
pe.skipNodeFiles()
pe.skipPath('internal/module.js')

const exposedProperties = ['window', 'navigator', 'document']
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
global.assert = require('power-assert')
global.deepFreeze = require('deep-freeze')
chai.use(sinonChai)
