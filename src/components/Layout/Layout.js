import React, { PropTypes } from 'react'

import LayoutDashboard from '../LayoutDashboard'
import LayoutMain from '../LayoutMain'

const Layout = (props) => (props.params.layout === 'dashboard' ? <LayoutDashboard { ...props } /> : <LayoutMain { ...props } />)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.shape({
    layout: PropTypes.string
  }).isRequired
}

Layout.defaultProps = {
  children: <div></div>,
  params: { layout: 'main' }
}

export default Layout
