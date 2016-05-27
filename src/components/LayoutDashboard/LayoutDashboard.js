import React, { PropTypes } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import style from './LayoutDashboard.scss'

const LayoutDashboard = ({ children, params }) => {
  const NAV_LINKS = [
    {
      title: 'productLink',
      link: `/${params.layout}/products`
    },
    {
      title: 'notFoundLink',
      link: `/${params.layout}/404`
    }
  ]

  let links = NAV_LINKS.map(item => <li activeClassName="active" key={item.link}>
    <Link to={item.link}>{item.title}</Link>
  </li>)

  return (<div className={'app layout layout-dashboard'}>
    <Navbar fixed fluid staticTop componentClass="header" className={style.navigation} role="banner">
      <Navbar.Header>
        <Navbar.Brand className={style.navigationHeader}>
          <Link to="/main">dashboard</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse className="bs-navbar-collapse">
        <Nav role="navigation" id="top">{links}</Nav>
      </Navbar.Collapse>
    </Navbar>
    <aside className={`${style.sidemenu} app-aside`}>
      <div className={`${style.sidemenuBody}`}>
        <nav className="navi">
          <ul className="nav">
            <li><span>Navigation</span></li>
            <li className="line"></li>
            <li>
              <a href="#">menu 1</a>
              <ul className="nav nav-sub">
                <li><a href="#">menu 2</a></li>
                <li><a href="#">menu 3</a></li>
                <li><a href="#">menu 4</a></li>
                <li><a href="#">menu 5</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div className={`${style.container} app-content`}>
      <div className={`${style.containerBody} app-content-body`}>
        {children}
      </div>
    </div>
  </div>)
}

LayoutDashboard.propTypes = {
  activePage: PropTypes.func,
  children: PropTypes.node,
  params: PropTypes.shape({
    layout: PropTypes.string
  }).isRequired,
  location: PropTypes.object
}

LayoutDashboard.defaultProps = {
  params: { layout: 'layout' }
}


export default LayoutDashboard
