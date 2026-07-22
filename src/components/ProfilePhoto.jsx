import { useState } from 'react'
import { User } from 'lucide-react'
import { profile } from '../data/portafolio.js'

export default function ProfilePhoto() {
    const [error, setError] = useState(false)
    const hasPhoto = Boolean(profile.photo) && !error

    return (
        <div className="relative mx-auto w-full max-w-[300px] lg:mx-0">
            <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-cyan/10 blur-3xl"
                aria-hidden="true"
            />

            {/* marco tipo HUD con esquinas biseladas */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-cyan/30 bg-navy-surface [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
                {hasPhoto ? (
                    <img
                        src={profile.photo}
                        alt={profile.name}
                        onError={() => setError(true)}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-muted">
                        <User className="h-10 w-10" />
                    </div>
                )}

                {/* barrido tipo scanline HUD */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan/25 to-transparent animate-scan" />
                </div>

                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan/20" aria-hidden="true" />
            </div>

            {/* corner brackets estilo mira/HUD */}
            <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-cyan" aria-hidden="true" />
            <span className="pointer-events-none absolute -right-2 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-cyan" aria-hidden="true" />
        </div>
    )
}