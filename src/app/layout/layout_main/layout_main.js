import React, { PropTypes } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import style from './layout_main.scss'
import top_navigation_links from '../topnav_links'
import LanguageSelectorContainer from '../../../containers/LanguageSelectorConnector'

const layout_main = ({ children, params }) => {
  const NAV_LINKS = top_navigation_links(params)

  const links = NAV_LINKS.map(item => <li activeClassName="active" key={item.link}>
    <Link to={item.link}>{item.title}</Link>
  </li>)

  return (<div className={'app layout layout-main'}>
    <Navbar fixed fluid staticTop componentClass="header" className={style.navigation} role="banner">
      <Navbar.Header>
        <Navbar.Brand className={style.navigationHeader}>
          <Link to="/dashboard">main</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse className="bs-navbar-collapse">
        <Nav role="navigation" id="top">{links}</Nav>
        <LanguageSelectorContainer />
      </Navbar.Collapse>
    </Navbar>
    <div className={`${style.container} app-content`}>
      <div className={`${style.containerBody} app-content-body`}>
        {children}
      </div>
    </div>
  </div>)
}

layout_main.propTypes = {
  activePage: PropTypes.func,
  children: PropTypes.node,
  params: PropTypes.shape({
    layout: PropTypes.string
  }).isRequired,
  location: PropTypes.object
}

layout_main.defaultProps = {
  params: { layout: 'layout' }
}

export default layout_main
