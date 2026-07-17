function pad(n) {
    return String(n).padStart(2, '0')
}

export default function SectionHeader({ index, title, id }) {
    return (
        <div id={id} className="mb-10 flex items-baseline gap-3 scroll-mt-24">
            <span className="font-mono text-sm text-amber">{`// ${pad(index)}`}</span>
            <h2 className="font-mono text-xl sm:text-2xl font-semibold text-paper tracking-tight">
                {title}
            </h2>
            <span className="h-px flex-1 bg-border ml-2" aria-hidden="true" />
        </div>
    )
}