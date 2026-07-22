import { useEffect, useState } from 'react'

/**
 * Observa un conjunto de secciones por id y devuelve cuál está
 * actualmente más visible en el viewport, para resaltarla en la
 * navegación (scroll-spy).
 */
export default function useActiveSection(ids, options = {}) {
    const [activeId, setActiveId] = useState(ids[0])

    useEffect(() => {
        const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
        if (!elements.length) return undefined

        const ratios = new Map()

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
                })
                let bestId = activeId
                let bestRatio = 0
                ratios.forEach((ratio, id) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio
                        bestId = id
                    }
                })
                if (bestRatio > 0) setActiveId(bestId)
            },
            { threshold: [0.15, 0.3, 0.5, 0.7, 0.9], rootMargin: '-15% 0px -35% 0px', ...options }
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids.join(',')])

    return activeId
}