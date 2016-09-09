const jsdom = require('jsdom').jsdom

module.exports = () => {
  const exposedProperties = ['window', 'navigator', 'document']
  global.document = jsdom('')
  global.window = document.defaultView
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property)
      global[property] = document.defaultView[property]
    }
  })
}
