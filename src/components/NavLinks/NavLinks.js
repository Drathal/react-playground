import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const component = ({ linkList }) => <Nav>
  {
    linkList.map(item => {
      return <LinkContainer key={item.link} to={`${item.link}`}><NavItem>{item.title}</NavItem></LinkContainer>
    })
  }
</Nav>

component.propTypes = {
  linkList: PropTypes.array
}

component.defaultProps = {
  linkList: []
}

export default component
