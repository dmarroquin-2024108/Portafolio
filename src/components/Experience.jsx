import { Rocket, Sparkles, Handshake, ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const highlightIcons = [Rocket, Sparkles, Handshake]

export default function Experience() {
    const { t } = useLanguage()
    const stats = t('experience.stats')
    const highlights = t('experience.highlights')

    return (
        <section id="experience" className="py-10">
            <SectionHeader index={3} title={t('experience.title')} id="experience" subtitle={t('experience.subtitle')} />

            <HudPanel className="p-6 sm:p-8" accent>
                <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-cyan/10 blur-[100px]" aria-hidden="true" />

                <div className="relative inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-3 py-1.5 mb-5 [clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)]">
                    <Sparkles className="h-3.5 w-3.5 text-cyan animate-pulse-glow" />
                    <span className="font-hud text-[11px] uppercase tracking-[0.2em] text-cyan">{t('experience.badge')}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-paper tracking-tight max-w-2xl">
                    {t('experience.heading')}
                </h3>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
                    {t('experience.body')}
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center border border-border/70 bg-navy-deep/40 py-4 px-2">
                            <p className="font-display text-2xl sm:text-3xl font-bold text-cyan text-glow">{stat.value}</p>
                            <p className="mt-1 font-hud text-[10px] sm:text-[11px] uppercase tracking-wide text-muted">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-9 font-hud text-xs uppercase tracking-[0.25em] text-cyan">{t('experience.highlightsTitle')}</p>
                <div className="mt-4 grid sm:grid-cols-3 gap-4">
                    {highlights.map((item, i) => {
                        const Icon = highlightIcons[i % highlightIcons.length]
                        return (
                            <div
                                key={item.title}
                                className="group border border-border bg-navy-surface/60 p-4 hover:border-cyan/50 hover:-translate-y-0.5 transition-all [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                            >
                                <Icon className="h-5 w-5 text-cyan mb-2.5" />
                                <p className="font-hud font-semibold text-paper text-sm">{item.title}</p>
                                <p className="text-xs text-muted leading-relaxed mt-1.5">{item.text}</p>
                            </div>
                        )
                    })}
                </div>

                <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 font-hud text-sm font-semibold uppercase tracking-wide text-cyan hover:text-cyan-soft transition-colors"
                >
                    {t('experience.cta')}
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </HudPanel>
        </section>
    )
}
