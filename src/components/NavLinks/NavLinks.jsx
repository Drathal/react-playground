import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const component = ({ linkList }) => (<Nav>
  {
    linkList.map(item => {
      return (<LinkContainer key={item.link} active={false} to={{ pathname: `${item.link}` }}>
        <NavItem>{item.title}</NavItem>
      </LinkContainer>)
    })
  }
</Nav>)

component.displayName = 'NavLinks'

component.propTypes = {
  linkList: React.PropTypes.arrayOf(
    PropTypes.shape({
      link: React.PropTypes.string,  // eslint-disable-line react/no-unused-prop-types
      title: React.PropTypes.string  // eslint-disable-line react/no-unused-prop-types
    })
  ).isRequired
}

component.defaultProps = {
  linkList: []
}

export default component
