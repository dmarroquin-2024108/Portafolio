import { useEffect } from 'react'
import { X, ExternalLink, ImageOff } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        if (!project) return undefined

        function onKey(e) {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [project, onClose])

    if (!project) return null
    const gallery = project.images?.length ? project.images : [null, null]

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
                    aria-label="Cerrar"
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-cyan/40 bg-navy-deep text-cyan hover:bg-cyan/10"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="grid sm:grid-cols-2 gap-0.5 bg-navy-deep">
                    {gallery.map((img, i) => (
                        <div key={i} className="aspect-video bg-navy-deep flex items-center justify-center">
                            {img ? (
                                <img src={img} alt={`${project.name} captura ${i + 1}`} className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-muted">
                                    <ImageOff className="h-6 w-6" />
                                    <span className="font-hud text-[10px] uppercase tracking-wide">
                                        {i === 0 ? 'Captura general' : 'Captura de código'}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-6">
                    <p className="font-hud text-xs uppercase tracking-wide text-cyan">{project.category}</p>
                    <h3 className="font-display text-xl font-bold text-paper mt-1">{project.name}</h3>
                    <p className="text-sm text-muted leading-relaxed mt-3">{project.description}</p>

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
                        Ver repositorio
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </div>
    )
}