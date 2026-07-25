import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import {
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiMongodb,
    SiTailwindcss,
    SiDocker,
    SiGit
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { Smartphone, Database, Hash  } from 'lucide-react'
import { skills } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const iconMap = [
    { match: /react native/i, icon: Smartphone },
    { match: /react/i, icon: SiReact },
    { match: /node/i, icon: SiNodedotjs },
    { match: /javascript|typescript/i, icon: SiJavascript },
    { match: /java/i, icon: FaJava },
    { match: /c#/i, icon: Hash },
    { match: /mongo/i, icon: SiMongodb },
    { match: /sql/i, icon: Database },
    { match: /tailwind/i, icon: SiTailwindcss },
    { match: /docker/i, icon: SiDocker },
    { match: /git/i, icon: SiGit }
]

function iconFor(name) {
    return iconMap.find((entry) => entry.match.test(name))?.icon ?? SiReact
}

function CustomTooltip({ active, payload }) {
    const { t } = useLanguage()
    if (!active || !payload?.length) return null
    const item = payload[0].payload
    return (
        <div className="border border-cyan/40 bg-navy-deep px-3 py-2 font-hud text-xs shadow-glowSoft">
            <p className="text-paper font-semibold">{item.name}</p>
            <p className="text-cyan">{item.level}{t('skills.mastered')}</p>
        </div>
    )
}

export default function SkillsRadar() {
    const { t, lang } = useLanguage()
    const data = skills.map((s) => ({ ...s, category: s.category[lang] }))

    return (
        <section className="py-10">
            <SectionHeader index={2} title={t('skills.title')} id="skills" subtitle={t('skills.subtitle')} />

            <div className="grid lg:grid-cols-[1fr,0.85fr] gap-8">
                <HudPanel className="p-4 sm:p-6 h-[380px] sm:h-[440px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={data} outerRadius="72%">
                            <defs>
                                <radialGradient id="radarFill" cx="50%" cy="50%" r="70%">
                                    <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity={0.55} />
                                    <stop offset="100%" stopColor="var(--color-cyan-soft)" stopOpacity={0.08} />
                                </radialGradient>
                            </defs>
                            <PolarGrid stroke="var(--color-border)" />
                            <PolarAngleAxis
                                dataKey="name"
                                tick={{ fill: 'var(--color-muted)', fontSize: 11, fontFamily: 'Rajdhani' }}
                            />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name={t('skills.title')}
                                dataKey="level"
                                stroke="var(--color-cyan)"
                                fill="url(#radarFill)"
                                fillOpacity={1}
                                strokeWidth={2.5}
                                dot={{ r: 3.5, fill: 'var(--color-cyan)', stroke: 'var(--color-navy-deep)', strokeWidth: 1 }}
                                animationDuration={1200}
                            />
                            <Tooltip content={<CustomTooltip />} />
                        </RadarChart>
                    </ResponsiveContainer>
                </HudPanel>

                <div className="flex flex-col gap-3 justify-center">
                    {data.map((skill) => {
                        const Icon = iconFor(skill.name)
                        return (
                            <div key={skill.name} className="group">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="flex items-center gap-2.5 font-hud text-sm text-paper">
                                        <span className="flex h-8 w-8 items-center justify-center  bg-navy-surface/80 text-cyan">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        {skill.name}
                                    </span>
                                    <span className="font-display text-xs text-cyan">{skill.level}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-navy-surface overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-soft to-cyan shadow-glowSoft transition-all duration-700 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                                <span className="font-hud text-[10px] uppercase tracking-wide text-muted">{skill.category}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
