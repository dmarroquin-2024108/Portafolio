import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Home, User, Radar, Zap, LayoutGrid, Mail, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import Logo from './Logo.jsx'
import { LanguageToggle } from './ThemeLangControls.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { profile } from '../data/portafolio.js'
import { useLanguage } from '../context/LanguageContext.jsx'

const navConfig = [
    { href: '#home', key: 'home', icon: Home },
    { href: '#about', key: 'about', icon: User },
    { href: '#skills', key: 'skills', icon: Radar },
    { href: '#experience', key: 'experience', icon: Zap },
    { href: '#showcase', key: 'showcase', icon: LayoutGrid },
    { href: '#contact', key: 'contact', icon: Mail }
]

const sectionIds = navConfig.map((l) => l.href.slice(1))

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    const activeId = useActiveSection(sectionIds)
    const { t } = useLanguage()
    const links = navConfig.map((l) => ({ ...l, label: t(`nav.${l.key}`) }))

    useEffect(() => {
        function onScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            const max = scrollHeight - clientHeight
            setProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    return (
        <>
            {/* ---------- Riel fijo — escritorio ---------- */}
            <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-20 flex-col items-center justify-between border border-border bg-navy-surface/60 backdrop-blur-md py-6">
                <a href="#home" aria-label="Inicio">
                    <Logo iconOnly />
                </a>

                <nav className="flex flex-1 flex-col items-center justify-center gap-2">
                    {links.map(({ href, label, icon: Icon }) => {
                        const isActive = activeId === href.slice(1)
                        return (
                            <a
                                key={href}
                                href={href}
                                aria-label={label}
                                aria-current={isActive ? 'true' : undefined}
                                className="group relative flex h-11 w-11 items-center justify-center transition-colors [clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                            >
                                <span
                                    className={`absolute inset-0 border transition-all ${isActive
                                        ? 'border-cyan/60 bg-cyan/10 shadow-glowSoft'
                                        : 'border-transparent group-hover:border-cyan/30 group-hover:bg-navy-surface/70'
                                        } [clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]`}
                                    aria-hidden="true"
                                />
                                <Icon className={`relative h-4.5 w-4.5 transition-colors ${isActive ? 'text-cyan' : 'text-muted group-hover:text-cyan'}`} />
                                {isActive && (
                                    <motion.span
                                        layoutId="sidebar-active-dot"
                                        className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-cyan shadow-glow"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-sm border border-cyan/30 bg-navy-deep px-2.5 py-1 font-hud text-xs uppercase tracking-wide text-paper opacity-0 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                                    {label}
                                </span>
                            </a>
                        )
                    })}
                </nav>

                <div className="flex flex-col items-center gap-4">
                    <LanguageToggle />
                    <div className="flex flex-col items-center gap-3 text-muted">
                        <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan transition-colors">
                            <FaGithub className="h-4 w-4" />
                        </a>
                        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan transition-colors">
                            <FaLinkedin className="h-4 w-4" />
                        </a>
                    </div>
                    {/* barra de progreso de scroll — "tiempo de partido" */}
                    <div className="relative h-24 w-1 overflow-hidden rounded-full bg-navy-surface">
                        <div
                            className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-cyan to-cyan-soft shadow-glowSoft transition-[height] duration-150"
                            style={{ height: `${progress}%` }}
                        />
                    </div>
                </div>
            </aside>

            <header className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-cyan/15 bg-navy-deep/90 backdrop-blur-md px-6 py-4">
                <a href="#home" aria-label="Inicio">
                    <Logo />
                </a>
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Abrir menú"
                        className="flex h-9 w-9 items-center justify-center border border-cyan/40 text-cyan [clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                    >
                        <Menu className="h-4 w-4" />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <motion.div
                            className="flex h-full flex-col px-8 py-6"
                            initial={{ x: -24, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -24, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center justify-between">
                                <Logo />
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Cerrar menú"
                                    className="flex h-9 w-9 items-center justify-center border border-cyan/40 text-cyan"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            <nav className="mt-12 flex flex-col gap-1">
                                {links.map(({ href, label, icon: Icon }, i) => {
                                    const isActive = activeId === href.slice(1)
                                    return (
                                        <motion.a
                                            key={href}
                                            href={href}
                                            onClick={() => setOpen(false)}
                                            initial={{ x: -16, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.05 * i, duration: 0.35 }}
                                            className={`flex items-center gap-4 border-b border-border/60 py-4 font-hud text-lg uppercase tracking-wide transition-colors ${isActive ? 'text-cyan' : 'text-paper hover:text-cyan'
                                                }`}
                                        >
                                            <Icon className="h-5 w-5" />
                                            {label}
                                        </motion.a>
                                    )
                                })}
                            </nav>

                            <div className="mt-auto flex items-center gap-5 pt-8 text-muted">
                                <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan transition-colors">
                                    <FaGithub className="h-5 w-5" />
                                </a>
                                <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan transition-colors">
                                    <FaLinkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}