import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import Helmet from 'react-helmet'
import BodyClassName from 'react-body-classname'

import NavLogin from 'components/NavLogin'
import TopNavBar from 'components/TopNavBar'
import NavLinks from 'components/NavLinks'
import LanguageSelectorContainer from 'containers/LanguageSelectorContainer'

import style from './layout_dashboard.css'
import top_navigation_links from '../topnav_links'

const m = defineMessages({
  brandNameTwo: {
    id: 'brandNameTwo',
    defaultMessage: '#Company two#'
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

const component = ({ children, params, intl: { formatMessage: fm } }) => <BodyClassName className={style.body}>
  <div className={`${style.layout} layout layout-dashboard`}>
    <Helmet title={fm(m.brandNameTwo)} />
    <TopNavBar style={style} brand={<Link to="/main">{fm(m.brandNameTwo)}</Link>}>
      <LanguageSelectorContainer key={'menuitem-1'} />
      <NavLogin key={'menuitem-2'} messages={{ login: fm(m.login), logout: fm(m.logout) }} />
    </TopNavBar>
    <aside className={`${style.sidemenu} app-aside`}>
      <div className={`${style.sidemenuBody}`}>
        <NavLinks linkList={top_navigation_links(params)} />
      </div>
    </aside>
    <div className={`${style.container} app-content`}>
      <div className={`${style.containerBody} app-content-body`}>
        {children}
      </div>
    </div>
  </div>
</BodyClassName>


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
  params: { layout: 'layout' }
}

export default injectIntl(component)
