import { SET_LANGAUAGE, SET_LANGAUAGES } from './actions'

export const initialState = {
  current: 'en',
  available: ['en', 'de']
}

export default (state = initialState, action) => {
  const isAvailableLanguage = (languageCode) => state.available && state.available.filter(i => i === languageCode).length > 0

  switch (action.type) {
    case SET_LANGAUAGES:
    case SET_LANGAUAGE:
      if (!isAvailableLanguage(action.languageCode)) return state
      return {
        ...state,
        current: action.languageCode
      }
    default:
      return state
  }
}
