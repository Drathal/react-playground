// fix hot reload: add all lazy loaded modules here for dev and test - this will be fixt with react hot reloader 3 release
require('./app/index')
require('./app/route')

require('./app/layout/route')

require('./app/products/index')
require('./app/products/route')

require('./containers/LanguageSelectorConnector')
