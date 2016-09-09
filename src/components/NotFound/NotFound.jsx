import React, { PropTypes } from 'react'

const component = ({ location, messages }) =>
(<div className="container">
  <h1>{ messages.title }</h1>
  <p>{ messages.message }{location.pathname}</p>
</div>)

component.displayName = 'NotFound'

component.propTypes = {
  messages: PropTypes.shape({
    title: PropTypes.string,  // eslint-disable-line react/no-unused-prop-types
    message: PropTypes.string // eslint-disable-line react/no-unused-prop-types
  }),
  location: PropTypes.object
}

component.defaultProps = {
  messages: {
    title: '#messages.title#',
    message: '#messages.message#'
  },
  location: false
}

export default component
