import { extractMessagesFromGlob, toPot, outputPot } from 'react-gettext-parser'

const funcArgumentsMap = {
  gettext: ['msgid'],
  dgettext: [null, 'msgid'],
  ngettext: ['msgid', 'msgid_plural'],
  dngettext: [null, 'msgid', 'msgid_plural'],
  pgettext: ['msgctxt', 'msgid'],
  dpgettext: [null, 'msgctxt', 'msgid'],
  npgettext: ['msgctxt', 'msgid', 'msgid_plural'],
  dnpgettext: [null, 'msgid', 'msgid_plural']
}

const messages = extractMessagesFromGlob(['src/**/{*.js,*.jsx}'], { funcArgumentsMap }).map(block => {
  if (block.msgid_plural && block.msgstr.length <= 1) {
    block.msgstr.push('')
  }
  return block
})

outputPot('src/translation/messages.pot', toPot(messages), () => {})
