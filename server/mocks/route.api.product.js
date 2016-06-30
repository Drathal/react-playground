const express = require('express')
const router = express.Router()

router.get('/product', (req, res) => {
  res.send(JSON.stringify([{
    id: 123,
    description: 'sample product',
    productImage: 'http://lorempixel.com/200/200/technics/1'
  }, {
    id: 777,
    description: 'another sample product',
    productImage: 'http://lorempixel.com/200/200/technics/2'
  }, {
    id: 666,
    description: 'sample product without image'
  }]))
})

module.exports = router
