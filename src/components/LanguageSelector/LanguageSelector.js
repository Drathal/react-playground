import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const LanguageSelector = ({ messages, languageCodes, currentLanguage, onLanguageSwitch }) => {
  const buttons = languageCodes.map(languageCode => <Button
    key={`lang-${languageCode.locale}`}
    className={`switchLanguage switchLanguage-${languageCode.locale}`}
    onClick={() => onLanguageSwitch(languageCode.locale)}>
      {languageCode.name}
  </Button>)

  return (<div>
    {messages.currentLanguage}{currentLanguage}
    {buttons}
  </div>)
}

LanguageSelector.propTypes = {
  messages: PropTypes.shape({
    currentLanguage: PropTypes.element.isRequired
  }).isRequired,
  languageCodes: PropTypes.array,
  currentLanguage: PropTypes.string,
  onLanguageSwitch: PropTypes.func
}

LanguageSelector.defaultProps = {
  languageCodes: ['unset_LanguageCodes'],
  currentLanguage: 'unset_Language',
  onLanguageSwitch: () => {},
}

export default LanguageSelector
