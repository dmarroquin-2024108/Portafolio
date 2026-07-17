import { useEffect, useState } from 'react'
import { profile } from '../data/portafolio.js'

const links = [
    { href: '#home', label: 'inicio' },
    { href: '#experience', label: 'experiencia' },
    { href: '#projects', label: 'proyectos' },
    { href: '#education', label: 'educación' },
    { href: '#skills', label: 'stack' },
    { href: '#contact', label: 'contacto' }
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 transition-colors ${scrolled ? 'bg-ink/90 backdrop-blur border-b border-border' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#home" className="font-mono font-semibold text-paper">
                    <span className="text-amber">&lt;</span>
                    {profile.name.split(' ')[0]}
                    <span className="text-amber">/&gt;</span>
                </a>
                <ul className="hidden md:flex items-center gap-6 font-mono text-xs text-muted">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-amber transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}