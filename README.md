# react playground

[![CircleCI](https://circleci.com/gh/Drathal/react-playground/tree/master.svg?style=shield)](https://circleci.com/gh/Drathal/react-playground/tree/master)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

My personal frontend development playground

Uses:
  * javascript in ES6
  * webpack 2
  * react 15
  * react-intl (with support for gettext `.po` files)
  * react-router (with lazy loading components)
  * redux
  * mocha (with wallaby.js support)
  * css-modules (and sass support
  * post-css (autoprefixer)
  * automatic assets optimisation (`.png`, `.gif`, `.jpg`, `.svg`)
  * ...

## Usage
```shell
npm install
```
  * install all dependencies


### Production
```shell
npm run build
```
  * builds the application for production

```shell
npm start
```    
  * starts application in production mode at `localhost:3000`

### Development

```shell
npm run dev -s
```

  * runs a development server at `localhost:3000`
  * runs mocha tests on file change
  * extracts all language definitions and creates a `messages.pot` file
  * watches `*.po` files and creates message strings

```shell
npm run font:update
```
  * updates used fonts from the web
