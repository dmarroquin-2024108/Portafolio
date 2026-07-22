import { Zap } from 'lucide-react'
import { experience } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <SectionHeader index={3} title="Experiencia" id="experience" subtitle="Línea de tiempo — jugadas destacadas" />
            <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan/60 via-cyan/10 to-transparent" aria-hidden="true" />
                {experience.map((item, i) => (
                    <div key={item.company + i} className="relative pb-10 last:pb-0">
                        <span className="absolute -left-[33px] top-1 flex h-7 w-7 items-center justify-center border border-cyan/50 bg-navy-deep [clip-path:polygon(0_6px,6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%)]">
                            <Zap className="h-3.5 w-3.5 text-cyan" />
                        </span>
                        <div className="border border-border bg-navy-surface/60 p-5 hover:border-cyan/50 transition-colors [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h3 className="font-hud font-semibold text-paper">{item.role}</h3>
                                <span className="font-display text-xs text-cyan">{item.period}</span>
                            </div>
                            <p className="font-hud text-sm text-cyan-soft mt-1">{item.company}</p>
                            <p className="text-muted text-sm leading-relaxed mt-3">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}