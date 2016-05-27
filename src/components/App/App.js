import React, { PropTypes } from 'react'

const App = ({ children }) => <div className={'app'}>{children}</div>

App.propTypes = {
  children: PropTypes.element
}

export default App
