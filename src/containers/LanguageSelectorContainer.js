import React from 'react'
import { connect } from 'react-redux'
import { update } from 'react-intl-redux'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import IntlUtils from '../translation/IntlUtils'
import LanguageSelector from '../components/LanguageSelector'

const m = defineMessages({
  currentLanguage: {
    id: 'currentLanguage',
    defaultMessage: 'Current language:'
  },
  locale_en: {
    id: 'locale_en',
    defaultMessage: 'English'
  },
  locale_de: {
    id: 'locale_de',
    defaultMessage: 'Deutsch'
  }
})

const container = connect(
  (state) => ({
    currentLanguage: state.intl.locale,
    languageCodes: IntlUtils.locales.map(l => ({ locale: l.locale, name: <FormattedMessage {...m[`locale_${l.locale}`]} /> })),
    messages: { currentLanguage: <FormattedMessage {...m.currentLanguage} /> }
  }),
  (dispatch) => ({
    onLanguageSwitch: (locale) => {
      IntlUtils.loadLocale(locale).then((messages) => {
        dispatch(update({ locale, messages }))
      })
    }
  })
)(LanguageSelector)

export default injectIntl(container)
