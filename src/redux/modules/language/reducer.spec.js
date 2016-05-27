import { expect } from 'chai';
import deepFreeze from 'deep-freeze'

import languageReducer from './index'
import { setLanguage } from './actions'

describe('reducer language', () => {

    it('set the current language', () => {

        const stateBefore = {
            current: 'en',
            available: ['en', 'de']
        }
        const action = setLanguage('de')
        const stateAfter = {
            current: 'de',
            available: ['en', 'de']
        }

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(languageReducer(stateBefore, action)).to.deep.equal(stateAfter)
    });

});
