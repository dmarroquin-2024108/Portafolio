import { Mail, Calendar, GraduationCap, User, MapPin } from 'lucide-react'
import { profile } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function About() {
    const { t, lang } = useLanguage()

    const generalData = [
        { icon: User, label: t('about.name'), value: profile.name },
        { icon: Calendar, label: t('about.age'), value: profile.age[lang] },
        { icon: Mail, label: t('about.email'), value: profile.email },
        { icon: MapPin, label: t('about.location'), value: profile.location[lang] },
        { icon: GraduationCap, label: t('about.formation'), value: profile.formation[lang] }
    ]

    return (
        <section id="about" className="py-10">
            <SectionHeader index={1} title={t('about.title')} id="about" subtitle={t('about.subtitle')} />

            {/* a. descripción corta */}
            <p className="max-w-2xl text-muted leading-relaxed mb-6">{profile.summary[lang]}</p>

            {/* b. datos generales */}
            <HudPanel className="p-6 mb-2">
                <p className="font-hud text-xs uppercase tracking-[0.25em] text-cyan mb-4">{t('about.cardTitle')}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {generalData.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="flex items-start gap-3">
                            <Icon className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                            <div>
                                <p className="font-hud text-[11px] uppercase tracking-wide text-muted">{label}</p>
                                <p className="text-sm text-paper mt-0.5 break-words">{value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </HudPanel>
        </section>
    )
}
