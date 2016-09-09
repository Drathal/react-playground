import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, intlShape } from 'react-intl'
import Helmet from 'react-helmet'

import NavLogin from 'components/NavLogin'
import LanguageSelectorContainer from 'containers/LanguageSelectorContainer'
import TopNavBar from 'components/TopNavBar'
import NavLinks from 'components/NavLinks'

import m from './layout_main.messages'
import style from './layout_main.css'
import top_navigation_links from '../topnav_links'
import favicon from './favicon.ico'

const component = ({ children, params: { layout }, intl: { formatMessage: fm } }) => (<div className={`${style.layout} layout layout-main`}>
  <Helmet
    title={fm(m.brandName)}
    link={[{ rel: 'shortcut icon', href: favicon }]}
  />
  <TopNavBar brand={<Link to="/dashboard">{fm(m.brandName)}</Link>}>
    <NavLinks linkList={top_navigation_links(layout)} />
    <LanguageSelectorContainer />
    <NavLogin messages={{ login: fm(m.login), logout: fm(m.logout) }} />
  </TopNavBar>
  <div className={`${style.container} app-content`}>
    <div className={`${style.containerBody} app-content-body`}>
      {children}
    </div>
  </div>
</div>)

component.propTypes = {
  intl: intlShape,
  children: PropTypes.node,
  params: PropTypes.shape({
    layout: PropTypes.string // eslint-disable-line react/no-unused-prop-types
  }).isRequired,
}

component.defaultProps = {
  params: { layout: 'main' }
}

export default injectIntl(component)
