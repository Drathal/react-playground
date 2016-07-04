import React, { PropTypes } from 'react'
import './layout/theme.css'

const app = ({ children }) => <span>{children}</span>

app.propTypes = {
  children: PropTypes.element
}

export default app
