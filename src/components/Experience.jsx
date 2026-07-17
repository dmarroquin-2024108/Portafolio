import { GitCommitHorizontal } from 'lucide-react'
import { experience } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <SectionHeader index={2} title="Experiencia" id="experience" />
            <div className="relative pl-6 border-l border-border">
                {experience.map((item, i) => (
                    <div key={item.company + i} className="relative pb-10 last:pb-0">
                        <span className="absolute -left-[29px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface border border-border">
                            <GitCommitHorizontal className="h-3.5 w-3.5 text-amber" />
                        </span>
                        <div className="rounded-xl border border-border bg-surface p-5 hover:border-amber/50 transition-colors">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h3 className="font-semibold text-paper">{item.role}</h3>
                                <span className="font-mono text-xs text-muted">{item.period}</span>
                            </div>
                            <p className="font-mono text-sm text-amber mt-1">{item.company}</p>
                            <p className="text-muted text-sm leading-relaxed mt-3">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}