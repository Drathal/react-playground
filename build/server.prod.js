const path = require('path')
const express = require('express')

require('dotenv-safe').load()
const app = new express()
const port = process.env.APP_PORT || 8080

// product api (product api mock)
app.get('/api/product', (req, res) => res.sendFile(path.join(__dirname, '../test/fixtures/products.json')))

// serve files
app.use('/', express.static(path.join(__dirname, '../dist')))

// server index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))

// start server
app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> Application running at port %s', port)
  }
})
