import * as i18n from './i18n'
const de_DE = require('./fixture_de_DE.po')
const en_US = require('./fixture_en_US.po')

describe('module i18n', () => {
  describe('method addTranslation', () => {
    it('can check if a translation parameter is set ', () => {
      try {
        i18n.addTranslation()
      } catch (e) {
        expect(e.name).to.equal('AssertionError')
      }
    })

    it('can set a translation ', () => {
      i18n.addTranslation(de_DE)
      expect(i18n.getTranslations().de_DE).is.ok()
    })

    it('can set a second translation language', () => {
      i18n.addTranslation(en_US)
      expect(i18n.getTranslations().en_US).is.ok()
    })
  })

  describe('method setLanguage', () => {
    it('can switch languages', () => {
      i18n.setLanguage('de_DE')
      expect(i18n.gettext('test_translation')).to.equal('Eine Test-Übersetzung')
      i18n.setLanguage('en_US')
      expect(i18n.gettext('test_translation')).to.equal('A test translation')
    })
  })

  describe('method gettext', () => {
    it('can translate a msgid', () => {
      i18n.setLanguage('de_DE')
      expect(i18n.gettext('test_translation')).to.equal('Eine Test-Übersetzung')
    })
  })

  describe('method ngettext', () => {
    it('can translate a msgid_plural', () => {
      i18n.setLanguage('de_DE')
      expect(i18n.ngettext('singular_translation', 'plural_translation', 1)).to.equal('Eine Singular-Übersetzung')
      expect(i18n.ngettext('singular_translation', 'plural_translation', 2)).to.equal('Eine Plural-Übersetzung')
    })
  })
})
