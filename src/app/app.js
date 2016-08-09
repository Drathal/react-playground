import React, { PropTypes } from 'react'
import './layout/theme.css'

const app = ({ children }) => React.Children.only(children)

app.propTypes = {
  children: PropTypes.element.isRequired
}

export default app
