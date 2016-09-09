import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, intlShape } from 'react-intl'
import Helmet from 'react-helmet'
import BodyClassName from 'react-body-classname'

import NavLogin from 'components/NavLogin'
import TopNavBar from 'components/TopNavBar'
import NavLinks from 'components/NavLinks'
import LanguageSelectorContainer from 'containers/LanguageSelectorContainer'

import m from './layout_dashboard.messages'
import style from './layout_dashboard.css'
import top_navigation_links from '../topnav_links'
import favicon from './favicon.ico'

const component = ({ children, params: { layout }, intl: { formatMessage: fm } }) => (<BodyClassName className={style.body}>
  <div className={`${style.layout} layout layout-dashboard`}>
    <Helmet
      title={fm(m.brandNameTwo)}
      link={[{ rel: 'shortcut icon', href: favicon }]}
    />
    <TopNavBar style={style} brand={<Link to="/main">{fm(m.brandNameTwo)}</Link>}>
      <LanguageSelectorContainer />
      <NavLogin messages={{ login: fm(m.login), logout: fm(m.logout) }} />
    </TopNavBar>
    <aside className={`${style.sidemenu} app-aside`}>
      <div className={`${style.sidemenuBody}`}>
        <NavLinks linkList={top_navigation_links(layout)} />
      </div>
    </aside>
    <div className={`${style.container} app-content`}>
      <div className={`${style.containerBody} app-content-body`}>
        {children}
      </div>
    </div>
  </div>
</BodyClassName>)


component.propTypes = {
  intl: intlShape,
  children: PropTypes.node,
  params: PropTypes.shape({
    layout: PropTypes.string // eslint-disable-line react/no-unused-prop-types
  }).isRequired,
}

component.defaultProps = {
  params: { layout: 'layout' }
}

export default injectIntl(component)
