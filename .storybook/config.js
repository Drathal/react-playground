import React from 'react'
import { configure, setAddon, addDecorator } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

import '../src/app/layout/layout-global.css'
import '../src/app/layout/fonts-global.css'
import '../src/app/layout/theme.css'
import './theme.css'

setAddon(infoAddon)

addDecorator((story) => (
  <div style={{ padding: '5px 20px 20px 20px' }}>
    {story()}
  </div>
))

const req = require.context('../src', true, /story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
