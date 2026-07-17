import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { projects } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <SectionHeader index={3} title="Proyectos" id="projects" />
            <div className="grid sm:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl border border-border bg-surface p-5 hover:border-amber/60 hover:-translate-y-0.5 transition-all"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                <FolderGit2 className="h-5 w-5 text-amber" />
                                <h3 className="font-semibold text-paper">{project.name}</h3>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <p className="font-mono text-xs text-muted mt-2">{project.category}</p>
                        <p className="text-sm text-muted leading-relaxed mt-3">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="font-mono text-[11px] rounded-full border border-border px-2.5 py-1 text-muted"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}