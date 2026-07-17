export default function TerminalFrame({ title = 'zsh', children, className = '' }) {
    return (
        <div className={`rounded-xl border border-border bg-surface overflow-hidden ${className}`}>
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-3 font-mono text-xs text-muted">{title}</span>
            </div>
            <div className="p-5">{children}</div>
        </div>
    )
}