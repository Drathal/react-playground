export default callback => {
  if (!global.Intl) {
    require.ensure(['intl'], (require) => {
      require('intl')

      callback()
    })
  } else {
    callback()
  }
}
