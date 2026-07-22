import { useState } from 'react'
import { FolderGit2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
    const [active, setActive] = useState(null)

    return (
        <section id="projects" className="py-20">
            <SectionHeader index={6} title="Portafolio de aplicaciones" id="projects" subtitle="Plantilla completa — temporadas anteriores" />
            <div className="grid sm:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <button
                        key={project.name}
                        onClick={() => setActive(project)}
                        className="group text-left border border-border bg-navy-surface/60 p-5 hover:border-cyan/60 hover:-translate-y-0.5 transition-all [clip-path:polygon(0_12px,12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                <FolderGit2 className="h-5 w-5 text-cyan" />
                                <h3 className="font-hud font-semibold text-paper">{project.name}</h3>
                            </div>
                            <FaGithub className="h-4 w-4 text-muted group-hover:text-cyan transition-colors" />
                        </div>
                        <p className="font-hud text-xs text-muted mt-2 uppercase tracking-wide">{project.category}</p>
                        <p className="text-sm text-muted leading-relaxed mt-3">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span key={tech} className="font-hud text-[11px] uppercase border border-border px-2.5 py-1 text-muted">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <span className="mt-4 inline-block font-hud text-xs uppercase tracking-wide text-cyan">
                            Ver galería →
                        </span>
                    </button>
                ))}
            </div>

            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    )
}