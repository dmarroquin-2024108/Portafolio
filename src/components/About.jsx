import { Mail, Phone, MapPin, Calendar, GraduationCap, User } from 'lucide-react'
import { profile } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'

const generalData = [
    { icon: User, label: 'Nombre', value: profile.name },
    { icon: Calendar, label: 'Edad', value: profile.age },
    { icon: Mail, label: 'Correo', value: profile.email },
    { icon: MapPin, label: 'Ubicación', value: profile.location },
    { icon: GraduationCap, label: 'Formación', value: profile.formation }
]

export default function About() {
    return (
        <section id="about" className="py-20">
            <SectionHeader index={1} title="Sobre mí" id="about" subtitle="Desarrollador Web & Backend Senior" />

            {/* a. descripción corta */}
            <p className="max-w-2xl text-muted leading-relaxed mb-10">{profile.summary}</p>

            {/* b. datos generales */}
            <HudPanel className="p-6 mb-10">
                <p className="font-hud text-xs uppercase tracking-[0.25em] text-cyan mb-4">Ficha del jugador</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {generalData.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="flex items-start gap-3">
                            <Icon className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                            <div>
                                <p className="font-hud text-[11px] uppercase tracking-wide text-muted">{label}</p>
                                <p className="text-sm text-paper mt-0.5 break-words">{value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </HudPanel>
        </section>
    )
}