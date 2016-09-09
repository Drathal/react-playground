const chai = require('chai')
const dirtyChai = require('dirty-chai')
const sinonChai = require('sinon-chai')
const toMatchSnapshot = require('./toMatchSnapshot')

require('./prettyErrors')()
require('./dom')()

chai.use(dirtyChai)
chai.use(sinonChai)
chai.use(toMatchSnapshot)

global.navigator = { userAgent: 'node.js' }
global.expect = chai.expect
global.sinon = require('sinon')
global.assert = require('power-assert')
global.deepFreeze = require('deep-freeze')
