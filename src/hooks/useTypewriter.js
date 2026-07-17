import { useEffect, useRef, useState } from 'react'

export default function useTypewriter(
    text,
    {
        typeSpeed = 90,
        deleteSpeed = 45,
        startDelay = 400,
        pauseAfterType = 1800,
        pauseAfterDelete = 500,
        loop = true
    } = {}
) {
    const [displayed, setDisplayed] = useState('')
    const [isPaused, setIsPaused] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const prefersReducedMotion =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            setDisplayed(text)
            setIsPaused(true)
            return
        }

        let index = 0
        let phase = 'typing' // 'typing' | 'pausedFull' | 'deleting' | 'pausedEmpty' | 'done'

        const tick = () => {
            if (phase === 'typing') {
                index += 1
                setDisplayed(text.slice(0, index))
                if (index >= text.length) {
                    if (!loop) {
                        phase = 'done'
                        setIsPaused(true)
                        return
                    }
                    phase = 'pausedFull'
                    setIsPaused(true)
                    timeoutRef.current = setTimeout(tick, pauseAfterType)
                    return
                }
                timeoutRef.current = setTimeout(tick, typeSpeed)
                return
            }

            if (phase === 'pausedFull') {
                phase = 'deleting'
                setIsPaused(false)
                timeoutRef.current = setTimeout(tick, deleteSpeed)
                return
            }

            if (phase === 'deleting') {
                index -= 1
                setDisplayed(text.slice(0, index))
                if (index <= 0) {
                    phase = 'pausedEmpty'
                    setIsPaused(true)
                    timeoutRef.current = setTimeout(tick, pauseAfterDelete)
                    return
                }
                timeoutRef.current = setTimeout(tick, deleteSpeed)
                return
            }

            if (phase === 'pausedEmpty') {
                phase = 'typing'
                setIsPaused(false)
                timeoutRef.current = setTimeout(tick, typeSpeed)
            }
        }

        setDisplayed('')
        setIsPaused(false)
        timeoutRef.current = setTimeout(tick, startDelay)

        return () => clearTimeout(timeoutRef.current)
    }, [text, typeSpeed, deleteSpeed, startDelay, pauseAfterType, pauseAfterDelete, loop])

    return { displayed, done: isPaused }
}