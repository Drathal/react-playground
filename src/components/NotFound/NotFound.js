import React, { PropTypes } from 'react'

const NotFound = ({ location }) => <div className="container">
  <h1>404</h1>
  <p>Cannot find requested page: {location.pathname}</p>
</div>

NotFound.propTypes = {
  location: PropTypes.object
}

export default NotFound
