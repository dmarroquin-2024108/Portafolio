import { ArrowDown, Download, Radio } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/portafolio.js'
import ProfilePhoto from './ProfilePhoto.jsx'
import useTypewriter from '../hooks/useTypewriter.js'
import { Reveal } from './Reveal.jsx';
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
    const { t, lang } = useLanguage()
    const { displayed: typedRole, done: typingPaused } = useTypewriter(profile.role[lang], {
        typeSpeed: 55,
        deleteSpeed: 30,
        startDelay: 400,
        pauseAfterType: 2200,
        pauseAfterDelete: 500,
        loop: true
    })

    return (
        <section id="home" className="relative pt-20 pb-10 scroll-mt-24 overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]"
                aria-hidden="true"
            />

            <div className="relative grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
                <div>
                    <Reveal y={24}>
                        <p className="font-hud text-cyan text-sm uppercase tracking-[0.3em] mb-3">{t('hero.eyebrow')}</p>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper text-glow">
                            {profile.brand}
                        </h1>
                        <h2 className="mt-3 min-h-[1.6em] font-hud text-xl sm:text-2xl font-semibold text-cyan-soft">
                            <span aria-hidden="true">{typedRole}</span>
                            <span
                                className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-cyan align-middle ${typingPaused ? 'animate-pulse' : ''}`}
                                aria-hidden="true"
                            />
                            <span className="sr-only">{profile.role[lang]}</span>
                        </h2>

                        <p className="mt-6 max-w-xl text-muted leading-relaxed italic border-l-2 border-cyan/50 pl-4">
                            “{profile.tagline[lang]}”
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#about"
                                className="group inline-flex items-center gap-2 bg-cyan px-6 py-3 font-hud font-bold uppercase tracking-wide text-navy-deep shadow-glow transition-all hover:shadow-glowLg [clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                            >
                                {t('hero.explore')}
                                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                            </a>

                            <a
                                href={profile.cvUrl}
                                className="inline-flex items-center gap-2 border border-cyan/40 px-6 py-3 font-hud uppercase tracking-wide text-paper transition-colors hover:border-cyan hover:text-cyan [clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                            >
                                <Download className="h-4 w-4" />
                                {t('hero.downloadCv')}
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-5">
                            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-cyan transition-colors">
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-cyan transition-colors">
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.15} y={0} className="flex flex-col gap-6 lg:pt-2">
                    <div className="flex flex-col gap-6 lg:pt-2">
                        <ProfilePhoto />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}