import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'

import style from './layout_dashboard.scss'
import top_navigation_links from '../topnav_links'
import NavLogin from '../../../components/NavLogin'
import LanguageSelectorContainer from '../../../containers/LanguageSelectorContainer'
import TopNavBar from '../../../components/TopNavBar'
import TopNavLinks from '../../../components/TopNavLinks'

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

const component = ({ children, params }) => <div className={`${style.app} layout layout-dashboard`}>
  <TopNavBar
    brand={<Link to="/main"><FormattedMessage {...m.brandNameTwo} /></Link>}
    menu={[<LanguageSelectorContainer key={'menuitem-1'} />, <NavLogin messages={{
      login: <FormattedMessage {...m.login} />,
      logout: <FormattedMessage {...m.logout} />
    }} key={'menuitem-2'} />]}
    style={style}
  />
  <aside className={`${style.sidemenu} app-aside`}>
    <div className={`${style.sidemenuBody}`}><TopNavLinks linkList={top_navigation_links(params)} /></div>
  </aside>
  <div className={`${style.container} app-content`}>
    <div className={`${style.containerBody} app-content-body`}>
      {children}
    </div>
  </div>
</div>

component.propTypes = {
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
