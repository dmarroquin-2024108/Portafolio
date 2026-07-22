import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader({ onDone }) {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const prefersReducedMotion =
            typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            const id = setTimeout(() => {
                setProgress(100)
                setVisible(false)
                onDone?.()
            }, 0)
            return () => clearTimeout(id)
        }

        let value = 0
        const interval = setInterval(() => {
            // avance no lineal: rápido al inicio, se frena cerca del final
            const step = value < 70 ? Math.random() * 9 + 4 : Math.random() * 3 + 1
            value = Math.min(100, value + step)
            setProgress(Math.floor(value))
            if (value >= 100) {
                clearInterval(interval)
                setTimeout(() => {
                    setVisible(false)
                    onDone?.()
                }, 450)
            }
        }, 120)

        return () => clearInterval(interval)
    }, [onDone])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-navy-deep"
                >
                    <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-30" aria-hidden="true" />

                    <div className="relative flex h-24 w-64 items-center">
                        {/* pista / estela de energía */}
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-border" />
                        <div
                            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-cyan shadow-glow transition-all duration-150 ease-linear"
                            style={{ width: `${progress}%` }}
                        />

                        {/* balón */}
                        <div
                            className="absolute bottom-0 h-9 w-9 -translate-y-1 transition-all duration-150 ease-linear"
                            style={{ left: `calc(${progress}% - 18px)` }}
                        >
                            <svg viewBox="0 0 40 40" className="h-full w-full animate-roll drop-shadow-[0_0_10px_rgba(0,245,212,0.85)]">
                                <circle cx="20" cy="20" r="18" fill="#0B132B" stroke="#00F5D4" strokeWidth="1.4" />
                                <path
                                    d="M20 6 L28 12 L25 21 L15 21 L12 12 Z M20 6 V2 M28 12 L34 10 M25 21 L30 27 M15 21 L10 27 M12 12 L6 10"
                                    fill="none"
                                    stroke="#48CAE4"
                                    strokeWidth="1.1"
                                />
                            </svg>
                        </div>
                    </div>

                    <p className="mt-8 font-display text-3xl tabular-nums text-cyan animate-pulse-glow">
                        {progress}%
                    </p>
                    <p className="mt-2 font-hud text-sm tracking-[0.3em] text-muted">CARGANDO PORTAFOLIO</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}