import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'

import style from './layout_main.scss'
import top_navigation_links from '../topnav_links'
import NavLogin from '../../../components/NavLogin'
import LanguageSelectorContainer from '../../../containers/LanguageSelectorContainer'
import TopNavBar from '../../../components/TopNavBar'
import TopNavLinks from '../../../components/TopNavLinks'

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

const component = ({ children, params }) => <div className={`${style.app} layout layout-main`}>
  <TopNavBar
    brand={<Link to="/dashboard"><FormattedMessage {...m.brandName} /></Link>}
    links={<TopNavLinks linkList={top_navigation_links(params)} />}
    menu={[<LanguageSelectorContainer key={'menuitem-1'} />, <NavLogin messages={{
      login: <FormattedMessage {...m.login} />,
      logout: <FormattedMessage {...m.logout} />
    }} key={'menuitem-2'} />]}
  />
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
  params: { layout: 'main' }
}

export default injectIntl(component)
