import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import Helmet from 'react-helmet'

import NavLogin from 'components/NavLogin'
import LanguageSelectorContainer from 'containers/LanguageSelectorContainer'
import TopNavBar from 'components/TopNavBar'
import NavLinks from 'components/NavLinks'

import style from './layout_main.css'
import top_navigation_links from '../topnav_links'

const m = defineMessages({
  brandName: {
    id: 'brandName',
    defaultMessage: '#Company one#'
  },
  login: {
    id: 'login',
    defaultMessage: 'login'
  },
  logout: {
    id: 'logout',
    defaultMessage: 'logout'
  }
})

const component = ({ children, params, intl: { formatMessage: fm } }) => <div className={`${style.layout} layout layout-main`}>
  <Helmet title={fm(m.brandName)} />
  <TopNavBar brand={<Link to="/dashboard">{fm(m.brandName)}</Link>}>
    <NavLinks linkList={top_navigation_links(params)} />
    <LanguageSelectorContainer />
    <NavLogin messages={{ login: fm(m.login), logout: fm(m.logout) }} />
  </TopNavBar>
  <div className={`${style.container} app-content`}>
    <div className={`${style.containerBody} app-content-body`}>
      {children}
    </div>
  </div>
</div>

component.propTypes = {
  intl: PropTypes.object,
  activePage: PropTypes.func,
  children: PropTypes.node,
  params: PropTypes.shape({
    layout: PropTypes.string
  }).isRequired,
  location: PropTypes.object
}

component.defaultProps = {
  params: { layout: 'main' }
}

export default injectIntl(component)
