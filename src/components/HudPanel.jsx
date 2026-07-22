export default function HudPanel({ children, className = '', accent = false }) {
    return (
        <div
            className={`relative border ${accent ? 'border-cyan/40' : 'border-border'} bg-navy-surface/70 backdrop-blur-sm [clip-path:polygon(0_14px,14px_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%)] ${className}`}
        >
            {/* esquinas biseladas con acento neón */}
            <span className="pointer-events-none absolute left-0 top-3.5 h-[1.5px] w-3.5 -rotate-45 bg-cyan/70" aria-hidden="true" />
            <span className="pointer-events-none absolute right-3.5 bottom-0 h-[1.5px] w-3.5 -rotate-45 bg-cyan/70" aria-hidden="true" />
            {children}
        </div>
    )
}