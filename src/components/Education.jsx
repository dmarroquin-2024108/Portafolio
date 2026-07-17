import { GraduationCap } from 'lucide-react'
import { education } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'

export default function Education() {
    return (
        <section id="education" className="py-20">
            <SectionHeader index={4} title="Educación" id="education" />
            <div className="grid sm:grid-cols-2 gap-5">
                {education.map((item) => (
                    <div key={item.degree} className="rounded-xl border border-border bg-surface p-5">
                        <GraduationCap className="h-5 w-5 text-amber mb-3" />
                        <h3 className="font-semibold text-paper">{item.degree}</h3>
                        <p className="font-mono text-xs text-muted mt-1">{item.school}</p>
                        <p className="font-mono text-xs text-amber mt-1">{item.period}</p>
                        <p className="text-sm text-muted leading-relaxed mt-3">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}