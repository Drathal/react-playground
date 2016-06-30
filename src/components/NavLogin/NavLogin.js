import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const component = ({ messages, onLogin, onLogout }) => <Nav style={{ float: 'right' }}>
  <NavItem onClick={onLogin}>{messages.login}</NavItem>
  <NavItem onClick={onLogout}>{messages.logout}</NavItem>
</Nav>

component.propTypes = {
  messages: PropTypes.shape({
    login: PropTypes.any.isRequired,
    logout: PropTypes.any.isRequired
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
}

component.defaultProps = {
  messages: {
    login: '#messages.login#',
    logout: '#messages.logout#'
  },
  currentLanguage: 'unset_Language',
  onLogin: () => {},
  onLogout: () => {},
}

export default component
