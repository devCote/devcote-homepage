import React, { useContext, useState } from 'react'

export const languages = {
  en: true,
}

export const LangContext = React.createContext({
  lang: undefined,
  setLang: async (_lang) => null,
})

export const useLang = () => useContext(LangContext)

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(languages.en)

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
