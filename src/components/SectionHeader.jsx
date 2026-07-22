function pad(n) {
    return String(n).padStart(2, '0')
}

export default function SectionHeader({ index, title, id, subtitle }) {
    return (
        <div id={id} className="mb-10 scroll-mt-24">
            <div className="flex items-baseline gap-3">
                <span className="font-display text-sm text-cyan">{`/${pad(index)}`}</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-paper tracking-tight uppercase">
                    {title}
                </h2>
                <span className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent ml-2" aria-hidden="true" />
            </div>
            {subtitle && <p className="mt-2 font-hud text-sm text-muted">{subtitle}</p>}
        </div>
    )
}