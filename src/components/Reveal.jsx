import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0, y = 28, once = false, as = 'div' }) {
    const prefersReduced = useReducedMotion()
    const Component = motion[as] ?? motion.div

    if (prefersReduced) {
        const Plain = as
        return <Plain className={className}>{children}</Plain>
    }

    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.2 }}
            transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </Component>
    )
}

export function RevealGroup({ children, className = '', stagger = 0.09, once = false }) {
    const prefersReduced = useReducedMotion()

    if (prefersReduced) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: 0.15 }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: stagger } }
            }}
        >
            {children}
        </motion.div>
    )
}

export function RevealItem({ children, className = '', y = 22, x = 0 }) {
    const prefersReduced = useReducedMotion()

    if (prefersReduced) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y, x },
                show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
            }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal