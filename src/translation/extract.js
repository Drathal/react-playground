const glob = require('glob')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

glob.sync('./src/+(app|containers)/**/*.js').map(filename => {
  const result = require('babel-core').transform(fs.readFileSync(filename), {
    presets: ['es2015-webpack', 'stage-0', 'react'],
    plugins: ['react-intl']
  })

  if (result.metadata['react-intl'].messages.length <= 0) { return false }

  const destination = path.join('./i18n', filename).replace(/\.js$/, '.json')
  console.info('write: ', destination)
  mkdirp.sync(path.dirname(destination))
  fs.writeFileSync(destination, JSON.stringify(result.metadata['react-intl'].messages, null, 2))
  return true
})
