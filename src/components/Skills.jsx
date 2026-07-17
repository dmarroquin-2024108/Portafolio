import { skills } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <SectionHeader index={5} title="Stack" id="skills" />
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="rounded-lg border border-border bg-surface px-4 py-3 hover:border-amber/50 transition-colors"
                    >
                        <p className="text-sm font-medium text-paper">{skill.name}</p>
                        <p className="font-mono text-[11px] text-muted mt-0.5">{skill.category}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}