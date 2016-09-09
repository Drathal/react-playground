import React, { PropTypes } from 'react'
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap'

const component = ({ messages, languageCodes, currentLanguage, onLanguageSwitch }) =>
(<Nav style={{ float: 'right' }}>
  <NavDropdown title={messages.currentLanguage} id={'nav-language-select'}>
    {
      languageCodes.map(languageCode => (<MenuItem
        key={`lang-${languageCode.locale}`}
        className={`switchLanguage switchLanguage-${languageCode.locale}`}
        onClick={() => onLanguageSwitch(languageCode.locale)}>
          {languageCode.locale === currentLanguage && '* '}
          {languageCode.name}
      </MenuItem>))
    }
  </NavDropdown>
</Nav>)

component.displayName = 'LanguageSelector'

component.propTypes = {
  messages: PropTypes.shape({
    currentLanguage: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
    ]).isRequired
  }).isRequired,
  languageCodes: React.PropTypes.arrayOf(
    PropTypes.shape({
      name: React.PropTypes.string,  // eslint-disable-line react/no-unused-prop-types
      locale: React.PropTypes.string // eslint-disable-line react/no-unused-prop-types
    }).isRequired
  ),
  currentLanguage: PropTypes.string,
  onLanguageSwitch: PropTypes.func
}

component.defaultProps = {
  messages: {
    currentLanguage: '#messages.currentLanguage#',
  },
  languageCodes: [{ locale: 'unset_locale', name: 'unset_locale_name' }],
  currentLanguage: 'unset_Language',
  onLanguageSwitch: () => {},
}

export default component
