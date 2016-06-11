import { Component, Children, PropTypes } from 'react'
import * as i18n from './i18n'

const de_DE = require('./de_DE.po')
i18n.addTranslation(de_DE)

export default class I18n extends Component {
  getChildContext() {
    return { i18n }
  }

  render() {
    return Children.only(this.props.children)
  }
}

I18n.contextTypes = {
  i18n: PropTypes.object,
}

I18n.childContextTypes = {
  i18n: PropTypes.object
}

I18n.propTypes = {
  children: PropTypes.element.isRequired
}
