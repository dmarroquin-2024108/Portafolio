export default function Logo({ className = '', iconOnly = false }) {
    return (
        <div className={`group flex items-center gap-2.5 ${className}`}>
            <span className="relative flex h-9 w-9 items-center justify-center">
                {/* insignia tipo escudo eSports con costuras de balón */}
                <svg viewBox="0 0 40 40" className="h-full w-full drop-shadow-[0_0_6px_rgba(0,245,212,0.5)]">
                    <polygon
                        points="20,2 36,10 36,24 20,38 4,24 4,10"
                        fill="url(#logoGradient)"
                        stroke="#00F5D4"
                        strokeWidth="1.4"
                    />
                    <path
                        d="M20 10 L26 15 L23.5 22 L16.5 22 L14 15 Z"
                        fill="none"
                        stroke="#0B132B"
                        strokeWidth="1.2"
                    />
                    <path d="M20 10 V6 M26 15 L30 12 M23.5 22 L26 27 M16.5 22 L14 27 M14 15 L10 12" stroke="#0B132B" strokeWidth="1" />
                    <defs>
                        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40">
                            <stop offset="0%" stopColor="#48CAE4" />
                            <stop offset="100%" stopColor="#00F5D4" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
            {!iconOnly && (
                <span className="font-display text-sm tracking-[0.14em] text-paper">
                    Daniel<span className="text-cyan"> Marroquín</span>
                </span>
            )}
        </div>
    )
}