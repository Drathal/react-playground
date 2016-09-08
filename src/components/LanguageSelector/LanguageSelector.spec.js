import React from 'react'
import { shallow } from 'enzyme'
import LanguageSelector from 'components/LanguageSelector'

describe('component <LanguageSelector />', () => {
  it('can render', function () {
    expect(shallow(<LanguageSelector />).html()).toMatchSnapshot(this)
  })

  it('can render with props', function () {
    const props = {
      messages: {
        currentLanguage: 'en',
      },
      languageCodes: [
        { locale: 'en', name: 'EN' },
        { locale: 'de', name: 'DE' }
      ],
      currentLanguage: 'en'
    }

    expect(shallow(<LanguageSelector {...props} />).html()).toMatchSnapshot(this)
  })
})
