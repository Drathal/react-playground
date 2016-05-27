const path = require('path')
const express = require('express')

const app = new express()

// product api
app.get('/api/product', (req, res) => res.sendFile(path.join(__dirname, '../test/fixtures/products.json')))

// serve files
app.use('/', express.static(path.join(__dirname, '../dist')))

// server index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))

// start server
app.listen(8080, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> Application running at port %s', 8080)
  }
})
