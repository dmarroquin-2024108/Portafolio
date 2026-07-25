import { useLanguage } from '../context/LanguageContext.jsx'

export function LanguageToggle({ className = '' }) {
    const { lang, toggleLang, t } = useLanguage()

    return (
        <button
            type="button"
            onClick={toggleLang}
            aria-label={t('lang.toggle')}
            title={t('lang.toggle')}
            className={`flex h-9 w-9 items-center justify-center border border-cyan/30 font-hud text-[11px] font-bold uppercase tracking-wide text-muted transition-colors hover:border-cyan hover:text-cyan [clip-path:polygon(0_7px,7px_0,100%_0,100%_calc(100%-7px),calc(100%-7px)_100%,0_100%)] ${className}`}
        >
            {lang === 'es' ? 'EN' : 'ES'}
        </button>
    )
}
