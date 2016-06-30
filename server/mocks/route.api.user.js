const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookie = require('cookie')
const router = express.Router()

/*
{
  user: {
    id: 1,
    name: 'markus',
    username: 'drathal',
    email: 'a@a.com',
    password: '$2a$10$d05vPsV55mMwXcN3QEkxLOC0lPTBeZ.ZjNJoInUxuGHL.6gnY4Rxq',
    admin: false,
    isEmailVerified: false
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFya3VzIiwidXNlcm5hbWUiOiJkcmF0aGFsIiwiYWRtaW4iOmZhbHNlLCJpZCI6MSwiaWF0IjoxNDY3Mjk0NzU5LCJleHAiOjE0NjczODExNTl9.4RuzqySkK5_6-35xdEJOQzX2E1Ljd9xh3_aSCUcg068'
}
*/

const generateToken = (user) => {
  const u = {
    name: user.name,
    username: user.username,
    admin: user.admin,
    id: user.id,
  }

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })
}

/* a signup route to save the user for later use */
router.get('/users/signup', (req, res) => {
  // set a demo cookie
  if (!req.cookies.name) {
    res.setHeader('Set-Cookie', cookie.serialize('name', `value-${Math.random()}`, {
      httpOnly: true,
      maxAge: 5
    }))
  }

  const body = Object.assign({}, { name: 'markus', username: 'drathal', email: 'a@a.com', password: 'p' }, req.body)
  const hash = bcrypt.hashSync(body.password.trim(), 10)
  const user = {
    id: 1,
    name: body.name.trim(),
    username: body.username.trim(),
    email: body.email.trim(),
    password: hash,
    admin: false,
    isEmailVerified: false
  }

  res.json({
    user,
    token: generateToken(user)
  })
})

module.exports = router
