import fs from 'fs'
import chalk from 'chalk'
import values from 'lodash/values'
import flatten from 'lodash/flatten'
import flowRight from 'lodash/flowRight'
import toObjectBy from 'to-object-by'
import * as p2j from 'react-intl-po'

const poFiles = './src/translation/po/*.po'
const translationFiles = './i18n/**/*.json'
const destinationPath = './src/translation/json/'
const prefix = 'app.'

// process.argv[0] ||

function po2json() {
  const translationTable = p2j.readAllPOAsObjectSync(poFiles)
  const messageList = flowRight(
    flatten,
    values,
    p2j.readAllMessageAsObjectSync
  )(translationFiles)

  const result = toObjectBy(Object.keys(translationTable), locale => ({
    [locale]: toObjectBy(messageList, ({ id, defaultMessage }) => ({
      [id]: translationTable[locale][defaultMessage]
    }))
  }))

  Object.keys(result).map(
    (locale) => {
      const file = `${destinationPath}${prefix}${locale}.json`
      fs.writeFileSync(file, JSON.stringify(result[locale], null, 0))
      return console.info(chalk.green`> [react-intl-po] po transformed to ${file}`)
    }
  )
}

po2json()
