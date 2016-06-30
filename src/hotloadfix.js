// HACK: react-hot-reloader cannot hot update async modules
require('./app/index')
require('./app/route')

require('./app/layout/route')

require('./app/products/index')
require('./app/products/route')

require('./containers/LanguageSelectorContainer')
require('./components/NavLogin')
require('./components/TopNavBar')
