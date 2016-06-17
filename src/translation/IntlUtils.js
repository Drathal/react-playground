/* eslint-disable import/no-unresolved */
import Promise from 'bluebird'

const locales = {
  en: () => require('react-intl?locale=en!./json/app.en_US.json'),
  de: () => require('react-intl?locale=de!./json/app.de_DE.json')
}

const IntlUtils = {
  loadLocale: (locale) => new Promise((resolve) => locales[locale]()(resolve)),
  locales: Object.keys(locales).map(locale => { return { locale, name: `locale_${locale}` } })
}

export default IntlUtils
