import { profile } from '../data/portafolio.js'
import Logo from './Logo.jsx'

export default function Footer() {
    return (
        <footer className="border-t border-cyan/15 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Logo className="scale-90 origin-left" />
                <p className="font-hud text-xs text-muted text-center">
                    © {new Date().getFullYear()} {profile.name} — Fuera de cancha, dentro del código.
                </p>
            </div>
        </footer>
    )
}