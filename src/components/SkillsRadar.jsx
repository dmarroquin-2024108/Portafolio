import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { skills } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'

function CustomTooltip({ active, payload }) {
    if (!active || !payload?.length) return null
    const item = payload[0].payload
    return (
        <div className="border border-cyan/40 bg-navy-deep px-3 py-2 font-hud text-xs">
            <p className="text-paper font-semibold">{item.name}</p>
            <p className="text-cyan">{item.level}% dominado</p>
        </div>
    )
}

export default function SkillsRadar() {
    return (
        <section className="py-20">
            <SectionHeader index={2} title="Stack de habilidades" id="skills" subtitle="Estadísticas de rendimiento técnico" />

            <div className="grid lg:grid-cols-[1fr,0.85fr] gap-8">
                <HudPanel className="p-4 sm:p-6 h-[380px] sm:h-[440px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={skills} outerRadius="72%">
                            <PolarGrid stroke="#2C3868" />
                            <PolarAngleAxis
                                dataKey="name"
                                tick={{ fill: '#8892B0', fontSize: 11, fontFamily: 'Rajdhani' }}
                            />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Nivel"
                                dataKey="level"
                                stroke="#00F5D4"
                                fill="#00F5D4"
                                fillOpacity={0.28}
                                strokeWidth={2}
                                animationDuration={1200}
                            />
                            <Tooltip content={<CustomTooltip />} />
                        </RadarChart>
                    </ResponsiveContainer>
                </HudPanel>

                <div className="flex flex-col gap-3 justify-center">
                    {skills.map((skill) => (
                        <div key={skill.name} className="group">
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="font-hud text-sm text-paper">{skill.name}</span>
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
                    ))}
                </div>
            </div>
        </section>
    )
}