import React, { PropTypes } from 'react'
import { Navbar } from 'react-bootstrap'
import component_style from './TopNavBar.css'

const component = ({ links, menu, brand, style }) => {
  const s = { ...component_style, ...style }
  return (<Navbar fixed fluid staticTop componentClass="header" role="banner" className={s.navigation} >
    <Navbar.Header>
      <Navbar.Brand className={s.navigationHeader}>{brand}</Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse className="bs-navbar-collapse">
      {links}
      {menu.map(c => c)}
    </Navbar.Collapse>
  </Navbar>)
}

component.propTypes = {
  style: PropTypes.object,
  links: PropTypes.element,
  menu: PropTypes.array,
  brand: PropTypes.element
}

component.defaultProps = {
  style: {}
}


export default component
