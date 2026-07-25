import { useState } from 'react'
import { Mail, MapPin, Send, Loader2, CheckCircle2, XCircle, Briefcase } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/portafolio.js'
import SectionHeader from './SectionHeader.jsx'
import HudPanel from './HudPanel.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const initialForm = { name: '', email: '', message: '', company: '' }

export default function Contact() {
    const { t, lang } = useLanguage()
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const networks = [
        {
            key: 'linkedin',
            label: 'LinkedIn',
            icon: FaLinkedin,
            url: profile.social.linkedin,
            description: t('contact.linkedinDesc')
        },
        {
            key: 'computrabajo',
            label: 'CompuTrabajo',
            icon: Briefcase,
            url: profile.social.computrabajo,
            description: t('contact.computrabajoDesc')
        }
    ]

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
        <section id="contact" className="py-10">
            <SectionHeader index={7} title={t('contact.title')} id="contact" subtitle={t('contact.subtitle')} />

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <p className="text-muted leading-relaxed max-w-md">
                        {t('contact.intro')}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {networks.map(({ key, label, icon: Icon, url, description }) => (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="group border border-border bg-navy-surface/60 p-4 hover:border-cyan/60 transition-all [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                            >
                                <Icon className="h-5 w-5 text-cyan mb-2" />
                                <p className="font-hud font-semibold text-paper text-sm">{label}</p>
                                <p className="text-xs text-muted mt-1">{description}</p>
                            </a>
                        ))}
                    </div>

                    <div className="space-y-3 pt-2">
                        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-muted hover:text-cyan transition-colors">
                            <Mail className="h-4 w-4" /> {profile.email}
                        </a>
                        <p className="flex items-center gap-3 text-sm text-muted">
                            <MapPin className="h-4 w-4" /> {profile.location[lang]}
                        </p>
                    </div>
                </div>

                <HudPanel className="p-6" accent>
                    <p className="font-hud text-xs uppercase tracking-[0.25em] text-cyan mb-5">{t('contact.formTitle')}</p>
                    <form onSubmit={handleSubmit} className="relative space-y-4">
                        {/* Honeypot: oculto para personas, visible para bots. */}
                        <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                            <label htmlFor="company">{t('contact.honeypot')}</label>
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
                            <label htmlFor="name" className="block font-hud text-xs uppercase tracking-wide text-muted mb-1.5">{t('contact.name')}</label>
                            <input
                                id="name"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-border bg-navy-deep px-3 py-2.5 text-paper placeholder:text-muted/50 focus:border-cyan outline-none"
                                placeholder={t('contact.namePlaceholder')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-hud text-xs uppercase tracking-wide text-muted mb-1.5">{t('contact.email')}</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-border bg-navy-deep px-3 py-2.5 text-paper placeholder:text-muted/50 focus:border-cyan outline-none"
                                placeholder={t('contact.emailPlaceholder')}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-hud text-xs uppercase tracking-wide text-muted mb-1.5">{t('contact.message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border border-border bg-navy-deep px-3 py-2.5 text-paper placeholder:text-muted/50 focus:border-cyan outline-none resize-none"
                                placeholder={t('contact.messagePlaceholder')}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full inline-flex items-center justify-center gap-2 bg-cyan px-5 py-3 font-hud font-bold uppercase tracking-wide text-navy-deep shadow-glowSoft hover:shadow-glow transition-all disabled:opacity-60 [clip-path:polygon(0_8px,8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" /> {t('contact.sending')}
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" /> {t('contact.send')}
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="flex items-center gap-2 text-cyan text-xs">
                                <CheckCircle2 className="h-4 w-4" /> {t('contact.success')}
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="flex items-center gap-2 text-red-400 text-xs">
                                <XCircle className="h-4 w-4" />
                                {errorMsg || t('contact.errorDefault')}
                            </p>
                        )}
                    </form>
                </HudPanel>
            </div>
        </section>
    )
}