const locales = {
  en: () => require('react-intl?locale=en!./json/app.en_US.json'),
  de: () => require('react-intl?locale=de!./json/app.de_DE.json')
}

const polyfillIntl = callback => {
  if (!global.Intl) {
    require.ensure(['intl'], (require) => {
      require('intl')

      callback()
    })
  } else {
    callback()
  }
}

const IntlUtils = {
  polyfill: () => new Promise(resolve => polyfillIntl(resolve)),
  loadLocale: locale => new Promise(resolve => locales[locale]()(resolve)),
  locales: Object.keys(locales).map(locale => { return { locale, name: `locale_${locale}` } })
}

export default IntlUtils
