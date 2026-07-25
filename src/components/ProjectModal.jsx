import { useEffect, useState } from 'react'
import { X, ExternalLink, ImageOff, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ProjectModal({ project, onClose }) {
    const { t, lang } = useLanguage()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [project])

    useEffect(() => {
        if (!project) return undefined

        function onKey(e) {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % gallery.length)
            if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + gallery.length) % gallery.length)
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project, onClose])

    if (!project) return null
    const gallery = project.images?.length ? project.images : [null, null]
    const total = gallery.length
    const current = gallery[index]

    function prev() {
        setIndex((i) => (i - 1 + total) % total)
    }
    function next() {
        setIndex((i) => (i + 1) % total)
    }

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-deep/85 backdrop-blur-sm p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-cyan/30 bg-navy-surface [clip-path:polygon(0_18px,18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%)]"
            >
                <button
                    onClick={onClose}
                    aria-label={t('projects.close')}
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-cyan/40 bg-navy-deep text-cyan hover:bg-cyan/10"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* ---------- Carrusel de capturas ---------- */}
                <div className="relative aspect-video w-full overflow-hidden bg-navy-deep">
                    {current ? (
                        <img src={current} alt={`${project.name} ${t('projects.imageOf')} ${index + 1}`} className="h-full w-full object-cover" />
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
                            <ImageOff className="h-8 w-8" />
                            <span className="font-hud text-[10px] uppercase tracking-wide">
                                {index === 0 ? t('projects.generalCapture') : t('projects.codeCapture')}
                            </span>
                        </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan/15" />

                    {total > 1 && (
                        <>
                            <button
                                onClick={prev}
                                aria-label={t('showcase.prev')}
                                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-cyan/40 bg-navy-deep/80 text-cyan hover:bg-cyan/10 transition-colors"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={next}
                                aria-label={t('showcase.next')}
                                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-cyan/40 bg-navy-deep/80 text-cyan hover:bg-cyan/10 transition-colors"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                            <span className="absolute bottom-2 right-2 font-hud text-[11px] tracking-wide text-paper bg-navy-deep/70 border border-cyan/30 px-2 py-0.5">
                                {index + 1} / {total}
                            </span>
                        </>
                    )}
                </div>

                {total > 1 && (
                    <div className="flex items-center justify-center gap-1.5 py-3 bg-navy-deep">
                        {gallery.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`${i + 1}`}
                                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-cyan' : 'w-1.5 bg-border'}`}
                            />
                        ))}
                    </div>
                )}

                <div className="p-6">
                    <p className="font-hud text-xs uppercase tracking-wide text-cyan">{project.category[lang]}</p>
                    <h3 className="font-display text-xl font-bold text-paper mt-1">{project.name}</h3>
                    <p className="text-sm text-muted leading-relaxed mt-3">{project.description[lang]}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="font-hud text-[11px] uppercase border border-border px-2.5 py-1 text-muted">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-cyan px-5 py-2.5 font-hud font-bold uppercase text-sm text-navy-deep shadow-glowSoft hover:shadow-glow transition-all [clip-path:polygon(0_6px,6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%)]"
                    >
                        {t('projects.viewRepo')}
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </div>
    )
}
