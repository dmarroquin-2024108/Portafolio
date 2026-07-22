import { GraduationCap } from 'lucide-react'
import { education } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'

export default function Education() {
    return (
        <section id="education" className="py-20">
            <SectionHeader index={4} title="Educación" id="education" subtitle="Formación técnica" />
            <div className="grid sm:grid-cols-2 gap-5">
                {education.map((item) => (
                    <div key={item.degree} className="border border-border bg-navy-surface/60 p-5 hover:border-cyan/50 transition-colors [clip-path:polygon(0_12px,12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]">
                        <GraduationCap className="h-5 w-5 text-cyan mb-3" />
                        <h3 className="font-hud font-semibold text-paper">{item.degree}</h3>
                        <p className="font-hud text-xs text-muted mt-1">{item.school}</p>
                        <p className="font-display text-xs text-cyan mt-1">{item.period}</p>
                        <p className="text-sm text-muted leading-relaxed mt-3">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}