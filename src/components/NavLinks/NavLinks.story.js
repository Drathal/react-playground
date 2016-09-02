import React from 'react'
import { storiesOf } from '@kadira/storybook'

import NavLinks from 'components/NavLinks/NavLinks.jsx'

storiesOf('NavLinks', module)
  .addWithInfo('with 1 link', () => (
    <NavLinks linkList={[
      {
        title: 'link1',
        link: 'link1'
      }
    ]} />
), { inline: true, propTables: false })
  .addWithInfo('with more links', () => (
    <NavLinks linkList={[
      {
        title: 'link1',
        link: 'link1'
      },
      {
        title: 'link2',
        link: 'link2'
      }
    ]} />
), { inline: true, propTables: false })
