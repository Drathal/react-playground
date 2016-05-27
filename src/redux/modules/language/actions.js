export const SET_LANGAUAGE = 'ui/SET_LANGAUAGE'
export const SET_LANGAUAGES = 'ui/SET_LANGAUAGES'

export const setLanguage = (languageCode) => {
  return { type: SET_LANGAUAGE, languageCode }
}

export const setLanguages = (languageCodes) => {
  return { type: SET_LANGAUAGES, languageCodes }
}
