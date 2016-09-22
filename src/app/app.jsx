import React, { PropTypes } from 'react'

const component = ({ children }) => React.Children.only(children)

component.displayName = 'App'

component.propTypes = {
  children: PropTypes.element.isRequired
}

export default component
