import React, { PropTypes } from 'react'
import { Navbar } from 'react-bootstrap'
import component_style from './TopNavBar.css'

const component = ({ children, brand, style }) => {
  const s = { ...component_style, ...style }
  return (<Navbar fluid staticTop componentClass="header" role="banner" className={s.navigation} >
    <Navbar.Header>
      <Navbar.Brand className={s.navigationHeader}>
        {brand}
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse className="bs-navbar-collapse">
      {children}
    </Navbar.Collapse>
  </Navbar>)
}

component.displayName = 'TopNavBar'

component.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  brand: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string
  ])
}

component.defaultProps = {
  style: {}
}

export default component
