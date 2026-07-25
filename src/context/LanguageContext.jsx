import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations.js'

const LanguageContext = createContext(null)

function getInitialLang() {
    if (typeof window === 'undefined') return 'es'
    const saved = window.localStorage.getItem('portfolio-lang')
    if (saved === 'es' || saved === 'en') return saved
    const browserLang = window.navigator?.language?.slice(0, 2)
    return browserLang === 'en' ? 'en' : 'es'
}

function resolvePath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang)

    useEffect(() => {
        window.localStorage.setItem('portfolio-lang', lang)
        document.documentElement.lang = lang
    }, [lang])

    function toggleLang() {
        setLang((l) => (l === 'es' ? 'en' : 'es'))
    }

    const t = useMemo(() => {
        return (path) => {
            const value = resolvePath(translations[lang], path)
            if (value === undefined) return resolvePath(translations.es, path) ?? path
            return value
        }
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
    return ctx
}
