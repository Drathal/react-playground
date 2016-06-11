import Jed from 'jed'
import assert from 'assert'

const defaultDomain = 'messages'
const jed = {}
const translations = {}
let currentLanguage = null

export const addTranslation = (translation) => {
  assert(translation, 'please provide a translation')
  assert(translation.locale_data[translation.domain][''].lang, 'please provide a translation with a lang attribute')

  const localeData = { ...translation }
  const lang = translation.locale_data[translation.domain][''].lang

  if (!localeData.domain) {
    localeData.domain = defaultDomain
  }

  if (!currentLanguage) {
    currentLanguage = lang
  }

  translations[lang] = localeData
  jed[lang] = new Jed(translations[lang])

  return true
}

export const setLanguage = (language) => {
  currentLanguage = language
}

export const getTranslations = () => {
  return translations
}

export const gettext = (msgid) => {
  return currentLanguage ? jed[currentLanguage].gettext(msgid) : msgid
}

export const ngettext = (msgid, msgid_plural, n) => {
  return currentLanguage ? jed[currentLanguage].ngettext(msgid, msgid_plural, n) : msgid
}

/*
import moment from 'moment'
import 'moment/min/locales'
import IntlPolyfill from 'intl'


export default {

  _localeKey: 'en',
  _translationsObject: {},
  _getTranslations: null,
  _getLocale: null,

  gettext(msgid) { this._translate(msgid) },

  // ngettext(msgid, msgidPlural, count) { return count > 1 ? this.de[msgid][2] : this.de[msgid][1] },

  // pgettext(msgctxt, msgid) { return this.de[`${msgctxt}\u0004${msgid}`][1] },

  // npgettext(msgctxt, msgid, msgidPlural, count) { return count > 1 ? this.de[`${msgctxt}\u0004${msgid}`][2] : this.de[`${msgctxt}\u0004${msgid}`][1] },

  get _translations() {
    return this._getTranslations ? this._getTranslations() : this._translationsObject
  },

  set _translations(translations) {
    this._translationsObject = translations
  },

  get _locale() {
    return this._getLocale ? this._getLocale() : this._localeKey
  },

  set _locale(locale) {
    this._localeKey = locale
  },

  setLocale(locale) {
    if (this._translationsObject[locale]) {
      this._locale = locale
      return true
    }
    return false
  },

  setTranslations(translations) {
    this._translations[translations[''].language] = {
      headers: translations[''],
      translations: { ...translations },
      date: { long: 'MMMM Do, YYYY' }
    }
    delete(this._translations[translations[''].language].translations[''])
  },

  setTranslationsGetter(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Translations getter must be a function')
    }
    this._getTranslations = fn
  },

  setLocaleGetter(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Locale getter must be a function')
    }
    this._getLocale = fn
  },

  parse_plural(plural_forms, n) {
    return plural_forms.replace(/n/g, n)
  },

  ttt() {
    console.info(this._translations)
    return 'aaa'
  },

  t(key, replacements = {}) {
    return this._translate(key, replacements)
  },

  l(value, options) {
    return this._localize(value, options)
  },

  _translate(key, replacements = {}) {
    let translation = ''
    try {
      translation = this._fetchTranslation(this._translations, `${this._locale}.${key}`)
    } catch (err) {
      return formatMissingTranslation(key)
    }
    Object.keys(replacements).forEach(replacement => {
      translation = translation.split(`%{${replacement}}`).join(replacements[replacement])
    })
    return translation
  },

  _localize(value, options = {}) {
    if (options.dateFormat) {
      moment.locale(this._locale)
      return moment(value).format(this.t(options.dateFormat))
    }
    if (typeof value === 'number') {
      if (global.Intl) {
        if (!(Intl.NumberFormat &&
          Intl.NumberFormat.supportedLocalesOf(this._locale).length === 1)) {
          Intl.NumberFormat = IntlPolyfill.NumberFormat
        }
      } else {
        global.Intl = IntlPolyfill
      }
      return new Intl.NumberFormat(this._locale, options).format(value)
    }
    return value
  },

  _fetchTranslation(translations, key) {
    const index = key.indexOf('.')
    if (typeof translations === 'undefined') {
      throw new Error('not found')
    }
    if (index > -1) {
      return this._fetchTranslation(translations[key.substring(0, index)], key.substr(index + 1))
    }
    if (translations[key]) {
      return translations[key]
    }
    throw new Error('not found')
  },
}
*/
