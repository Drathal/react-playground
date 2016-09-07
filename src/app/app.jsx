import React, { PropTypes } from 'react'
import './layout/layout-global.css'
import './layout/fonts-global.css'
import './layout/theme.css'

const app = ({ children }) => React.Children.only(children)

app.propTypes = {
  children: PropTypes.element.isRequired
}

export default app
