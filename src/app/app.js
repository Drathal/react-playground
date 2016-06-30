import React, { PropTypes } from 'react'
import './layout/theme.scss'

const app = ({ children }) => <span>{children}</span>

app.propTypes = {
  children: PropTypes.element
}

export default app
