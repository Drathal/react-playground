import React from 'react'
import { storiesOf } from '@kadira/storybook'

import TopNavBar from 'components/TopNavBar/TopNavBar.jsx'

const defaultConfig = { inline: true, propTables: false }
const childs = (<ul className="nav navbar-nav">
  <li><a>menuitem 1</a></li>
  <li><a>menuitem 2</a></li>
</ul>)

storiesOf('TopNavBar', module)
  .addDecorator((story) => (<div style={{ marginTop: '60px' }}>{story()}</div>))
  .addWithInfo('no properties', () => (<div style={{ marginLeft: '-20px' }}><TopNavBar /></div>), defaultConfig)
  .addWithInfo('with menuitem', () => (<div style={{ marginLeft: '-20px' }}><TopNavBar brand={'Brand'} >{childs}</TopNavBar></div>), defaultConfig)
