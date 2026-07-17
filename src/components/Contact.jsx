import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { profile } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import TerminalFrame from './TerminalIframe.jsx'

const initialForm = { name: '', email: '', message: '', company: '' }

export default function Contact() {
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState('idle') 
    const [errorMsg, setErrorMsg] = useState('')

    function handleChange(e) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('loading')
        setErrorMsg('')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
            const data = await res.json().catch(() => ({}))
            if (!res.ok) {
                throw new Error(data.error || 'Request failed')
            }
            setStatus('success')
            setForm(initialForm)
        } catch (err) {
            setStatus('error')
            setErrorMsg(err.message)
        }
    }

    return (
        <section id="contact" className="py-20">
            <SectionHeader index={6} title="Contacto" id="contact" />
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-paper">Hablemos de tu proyecto</h3>
                    <p className="text-muted leading-relaxed max-w-md">
                        ¿Tienes una idea, una vacante o simplemente quieres saludar? Escríbeme y te
                        respondo lo antes posible.
                    </p>
                    <div className="space-y-3 pt-2">
                        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-muted hover:text-amber transition-colors">
                            <Mail className="h-4 w-4" /> {profile.email}
                        </a>
                        <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-sm text-muted hover:text-amber transition-colors">
                            <Phone className="h-4 w-4" /> {profile.phone}
                        </a>
                        <p className="flex items-center gap-3 text-sm text-muted">
                            <MapPin className="h-4 w-4" /> {profile.location}
                        </p>
                    </div>
                </div>

                <TerminalFrame title="contact.js">
                    <form onSubmit={handleSubmit} className="relative space-y-4 font-mono text-sm">
                        {/* Honeypot: oculto para personas, visible para bots. No usar display:none
                (algunos bots lo detectan); se oculta fuera de pantalla en su lugar. */}
                        <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                            <label htmlFor="company">No llenar este campo</label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                value={form.company}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-xs text-muted mb-1.5">nombre</label>
                            <input
                                id="name"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-border bg-ink px-3 py-2.5 text-paper placeholder:text-muted/60 focus:border-amber outline-none"
                                placeholder="Ada Lovelace"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs text-muted mb-1.5">email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-border bg-ink px-3 py-2.5 text-paper placeholder:text-muted/60 focus:border-amber outline-none"
                                placeholder="ada@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs text-muted mb-1.5">mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-border bg-ink px-3 py-2.5 text-paper placeholder:text-muted/60 focus:border-amber outline-none resize-none"
                                placeholder="Cuéntame sobre tu proyecto..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-3 font-semibold text-ink hover:bg-amber-soft transition-colors disabled:opacity-60"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" /> Enviar mensaje
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="flex items-center gap-2 text-mint text-xs">
                                <CheckCircle2 className="h-4 w-4" /> Mensaje enviado. ¡Gracias!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="flex items-center gap-2 text-red-400 text-xs">
                                <XCircle className="h-4 w-4" />
                                {errorMsg || 'Algo falló. Intenta de nuevo o escríbeme directo por correo.'}
                            </p>
                        )}
                    </form>
                </TerminalFrame>
            </div>
        </section>
    )
}