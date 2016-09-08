const path = require('path')
const fs = require('fs')
const pretty = require('pretty')
const chai = require('chai')
const dirtyChai = require('dirty-chai')
const sinonChai = require('sinon-chai')
const sanitize = require('sanitize-filename')

chai.use(dirtyChai)

const pe = require('pretty-error').start()

pe.skipPackage('mocha', 'babel-register', 'empower-core', 'babel-plugin-espower')
pe.skipNodeFiles()
pe.skipPath('internal/module.js')

const jsdom = require('jsdom').jsdom

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

// naive snapshot testing implementation
chai.use((c) => {
  const Assertion = c.Assertion
  Assertion.addMethod('toMatchSnapshot', function toMatchSnapshot(mocha) {
    const testfile = path.basename(mocha.test.parent.file).replace(/\.spec\.js/g, '')
    const filename = sanitize(`${mocha.test.title}`).replace(/\s/g, '')
    const filepath = path.dirname(mocha.test.parent.file)
    const snapshotfile = `${filepath}/${testfile}.snapshot.${filename}.html`
    if (!fs.existsSync(snapshotfile)) {
      fs.writeFileSync(snapshotfile.trim(), pretty(this._obj).trim())
      assert(true)
      return
    }

    const snapshot = fs.readFileSync(snapshotfile, 'utf8').trim().replace(/\s*\n/g, '\n')
    const testhtml = pretty(this._obj).trim().replace(/\s*\n/g, '\n')

    assert.equal(snapshot, testhtml, 'snapshot not matched')
  })
})
