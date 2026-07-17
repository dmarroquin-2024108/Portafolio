import { profile } from '../data/portafolio.js'

export default function Footer() {
    return (
        <footer className="border-t border-border py-8 mt-10">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
                <p>© {new Date().getFullYear()} {profile.name}. Hecho con React + Tailwind.</p>
                <p>Diseñado &amp; construido a mano — sin frameworks de más.</p>
            </div>
        </footer>
    )
}