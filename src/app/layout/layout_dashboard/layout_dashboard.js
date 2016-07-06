import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import Helmet from 'react-helmet'

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

class component extends React.Component {
  // sideeffect: changing style outside component scope
  componentWillMount() {
    document.body.style.backgroundColor = '#e0e0e0'
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null
  }

  render() {
    const { formatMessage: fm } = this.props.intl

    return (<div className={`${style.layout} layout layout-dashboard`}>
      <Helmet title={fm(m.brandNameTwo)} />
      <TopNavBar style={style} brand={<Link to="/main">{fm(m.brandNameTwo)}</Link>}>
        <LanguageSelectorContainer key={'menuitem-1'} />
        <NavLogin key={'menuitem-2'} messages={{ login: fm(m.login), logout: fm(m.logout) }} />
      </TopNavBar>
      <aside className={`${style.sidemenu} app-aside`}>
        <div className={`${style.sidemenuBody}`}>
          <NavLinks linkList={top_navigation_links(this.props.params)} />
        </div>
      </aside>
      <div className={`${style.container} app-content`}>
        <div className={`${style.containerBody} app-content-body`}>
          {this.props.children}
        </div>
      </div>
    </div>)
  }
}

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
