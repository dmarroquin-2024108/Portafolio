import { Globe, ArrowUpRight, Download } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { profile, stats } from '../data/portafolio.js'
import TerminalFrame from './TerminalIframe.jsx'
import ProfilePhoto from './ProfilePhoto'
import useTypewriter from '../hooks/useTypewriter.js'

const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter,
    website: Globe
}

export default function Hero() {
    const { displayed: typedName, done: typingPaused } = useTypewriter(profile.name, {
        typeSpeed: 90,
        deleteSpeed: 45,
        startDelay: 400,
        pauseAfterType: 1800,
        pauseAfterDelete: 500,
        loop: true
    })

    return (
        <section id="home" className="relative pt-28 pb-20 scroll-mt-24">
            <div
                className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
                aria-hidden="true"
            />
            <div className="relative grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
                <div>
                    {profile.available && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                            </span>
                            <span className="font-mono text-xs text-muted">Disponible para trabajar</span>
                        </div>
                    )}

                    <p className="font-mono text-amber text-sm mb-3">Hola, soy</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper text-glow min-h-[1.1em]">
                        <span aria-hidden="true">{typedName}</span>
                        <span
                            className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-amber align-middle sm:w-[4px] ${typingPaused ? 'animate-pulse' : ''
                                }`}
                            aria-hidden="true"
                        />
                        <span className="sr-only">{profile.name}</span>
                    </h1>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-muted">
                        {profile.role}
                    </h2>
                    <p className="mt-6 max-w-xl text-muted leading-relaxed">{profile.summary}</p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 font-mono text-sm font-semibold text-ink hover:bg-amber-soft transition-colors"
                        >
                            Contáctame
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                            href={profile.cvUrl}
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-mono text-sm text-paper hover:border-amber hover:text-amber transition-colors"
                        >
                            <Download className="h-4 w-4" />
                            Descargar CV
                        </a>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        {Object.entries(profile.social).map(([key, url]) => {
                            const Icon = socialIcons[key]
                            if (!Icon) return null
                            return (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={key}
                                    className="text-muted hover:text-amber transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:pt-2">
                    <ProfilePhoto />

                    <TerminalFrame title="whoami.js">
                        <pre className="font-mono text-sm leading-relaxed overflow-x-auto scrollbar-thin">
                            <code>
                                <span className="text-muted">{'// perfil'}</span>{'\n'}
                                <span className="text-[#C792EA]">const</span>{' '}
                                <span className="text-[#82AAFF]">developer</span> = {'{'}{'\n'}
                                {'  '}name: <span className="text-mint">'{profile.name}'</span>,{'\n'}
                                {'  '}role: <span className="text-mint">'{profile.role}'</span>,{'\n'}
                                {'  '}location: <span className="text-mint">'{profile.location}'</span>,{'\n'}
                                {'  '}stack: [<span className="text-mint">'React'</span>, <span className="text-mint">'Node.js'</span>, <span className="text-mint">'Tailwind'</span>],{'\n'}
                                {'  '}available: <span className="text-amber">{String(profile.available)}</span>,{'\n'}
                                {'}'};
                            </code>
                        </pre>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {stats.map((s) => (
                                <div key={s.label} className="rounded-lg border border-border bg-ink px-4 py-3">
                                    <p className="font-mono text-xl font-bold text-amber">{s.value}</p>
                                    <p className="text-xs text-muted mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </TerminalFrame>
                </div>
            </div>
        </section>
    )
}