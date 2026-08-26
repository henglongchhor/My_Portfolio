import { useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'
import { LanguageContext } from './language-context'

const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  return savedLanguage === 'kh' ? 'kh' : 'en'
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getSavedLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.title = translations[language].meta.title
  }, [language])

  const value = useMemo(() => {
    const t = (key, replacements = {}) => {
      const translated = key.split('.').reduce((result, part) => result?.[part], translations[language])
      if (typeof translated !== 'string') return translated ?? key
      return Object.entries(replacements).reduce(
        (result, [name, replacement]) => result.replace(`{{${name}}}`, replacement),
        translated
      )
    }

    const localize = (item, field) =>
      language === 'km' ? item[`${field}Km`] || item[field] : item[field]

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(current => current === 'en' ? 'km' : 'en'),
      t,
      localize,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
