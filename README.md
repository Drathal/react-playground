# react playground

[![Join the chat at https://gitter.im/Drathal/react-playground](https://badges.gitter.im/Drathal/react-playground.svg)](https://gitter.im/Drathal/react-playground?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI](https://circleci.com/gh/Drathal/react-playground/tree/master.svg?style=shield)](https://circleci.com/gh/Drathal/react-playground/tree/master)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Dependencies](https://david-dm.org/Drathal/react-playground.svg)](https://david-dm.org/Drathal/react-playground)

My personal frontend development playground.

Uses:
  * javascript in ES6
  * babel 6
  * webpack 2
  * react 15
  * react-intl (with support for gettext `.po` files)
  * react-router (with lazy loading components)
  * redux
  * mocha (with wallaby.js support)
  * enzyme
  * css-modules
  * postcss
  * automatic assets optimisation (`.png`, `.gif`, `.jpg`, `.svg`)
  * ...

While this repro is using webpack as module bundler. It does not use webpack for unit testing. To archieve this im using
`babel-plugin-webpack-loaders` and `babel-plugin-webpack-aliases`.

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
npm run start:dev -s
```

  * runs a development server at `localhost:3000`
  * runs mocha tests on file change (not on file add)
  * extracts all language definitions and creates a `messages.pot` file on change
  * watches `*.po` files and creates message strings

```shell
npm run font:update
```
  * updates used fonts from the web

### Docker

```shell
docker build -t drathal/react-playground:v0.1.1 .
```

  * build docker image

```shell
docker run -ti -d --name react-playground -p 3000:3000 -v $(pwd):/home/app drathal/react-playground:v0.1.1 npm start:dev
```

  * run docker image with mounted development source

### translation

```shell
npm run translation:export
```

  * extract all messages and create a export `messages.pot` file

```shell
npm run translation:import
```

  * imports all `*.po` files and creates `*.json` files
