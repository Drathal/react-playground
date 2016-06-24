import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const LanguageSelector = ({ messages, languageCodes, currentLanguage, onLanguageSwitch }) => {
  const buttons = languageCodes.map(languageCode => <Button
    style={{ marginLeft: '0.5em' }}
    key={`lang-${languageCode.locale}`}
    className={`switchLanguage switchLanguage-${languageCode.locale}`}
    onClick={() => onLanguageSwitch(languageCode.locale)}>
      {languageCode.locale === currentLanguage && '* '}
      {languageCode.name}
  </Button>)

  return (<ul className={'nav navbar-nav'} style={{ float: 'right' }}>
    <li style={{ lineHeight: '3.3em' }}>{messages.currentLanguage}{' '}{currentLanguage}</li>
    <li style={{ lineHeight: '3.3em' }}>{buttons}</li>
  </ul>)
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
