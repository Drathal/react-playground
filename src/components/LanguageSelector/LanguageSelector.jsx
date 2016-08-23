import React, { PropTypes } from 'react'
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap'

const component = ({ messages, languageCodes, currentLanguage, onLanguageSwitch }) => <Nav style={{ float: 'right' }}>
  <NavDropdown title={messages.currentLanguage} id={'nav-language-select'}>
    {languageCodes.map(languageCode => <MenuItem
      key={`lang-${languageCode.locale}`}
      className={`switchLanguage switchLanguage-${languageCode.locale}`}
      onClick={() => onLanguageSwitch(languageCode.locale)}>
        {languageCode.locale === currentLanguage && '* '}
        {languageCode.name}
    </MenuItem>)}
  </NavDropdown>
</Nav>

component.propTypes = {
  messages: PropTypes.shape({
    currentLanguage: PropTypes.element.isRequired
  }).isRequired,
  languageCodes: PropTypes.array,
  currentLanguage: PropTypes.string,
  onLanguageSwitch: PropTypes.func
}

component.defaultProps = {
  messages: {
    currentLanguage: '#messages.currentLanguage#',
  },
  languageCodes: ['unset_LanguageCodes'],
  currentLanguage: 'unset_Language',
  onLanguageSwitch: () => {},
}

export default component
