import { useState } from 'react'
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
import { showcaseProjects } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ProjectShowcase() {
    const { t } = useLanguage()
    const [index, setIndex] = useState(0)
    const total = showcaseProjects.length

    function prev() {
        setIndex((i) => (i - 1 + total) % total)
    }
    function next() {
        setIndex((i) => (i + 1) % total)
    }

    const current = showcaseProjects[index]

    return (
        <section id="showcase" className="py-10">
            <SectionHeader index={5} title={t('showcase.title')} id="showcase" subtitle={t('showcase.subtitle')} />

            <HudPanel className="p-4 sm:p-6" accent>
                <div className="relative aspect-video w-full overflow-hidden bg-navy-deep">
                    {current.image ? (
                        <img src={current.image} alt={current.name} className="h-full w-full object-cover" />
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                            <ImageOff className="h-8 w-8" />
                            <span className="font-hud text-xs uppercase tracking-wide">{t('showcase.pending')}</span>
                        </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan/15" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button
                        onClick={prev}
                        aria-label={t('showcase.prev')}
                        className="flex h-9 w-9 items-center justify-center border border-cyan/30 text-cyan hover:bg-cyan/10 transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    <div className="text-center">
                        <p className="font-hud text-sm text-paper">{current.name}</p>
                        <div className="mt-2 flex items-center justify-center gap-1.5">
                            {showcaseProjects.map((p, i) => (
                                <button
                                    key={p.name}
                                    onClick={() => setIndex(i)}
                                    aria-label={`Ir a ${p.name}`}
                                    className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-cyan' : 'w-1.5 bg-border'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={next}
                        aria-label={t('showcase.next')}
                        className="flex h-9 w-9 items-center justify-center border border-cyan/30 text-cyan hover:bg-cyan/10 transition-colors"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </HudPanel>
        </section>
    )
}