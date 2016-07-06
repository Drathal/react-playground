import React, { PropTypes } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router'

const component = ({ linkList }) => <Nav role="navigation">{
    linkList.map(item => <li key={item.link}>
      <Link to={item.link}>{item.title}</Link>
    </li>)
  }</Nav>

component.propTypes = {
  linkList: PropTypes.array
}

component.defaultProps = {
  linkList: []
}

export default component
