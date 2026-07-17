import { useState } from 'react'
import { User } from 'lucide-react'
import { profile } from '../data/portafolio.js'

export default function ProfilePhoto() {
    const [error, setError] = useState(false)
    const hasPhoto = Boolean(profile.photo) && !error

    return (
        <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
            <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-amber/10 blur-3xl"
                aria-hidden="true"
            />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
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

                {/* degradado inferior: funde la foto con el fondo de la página (bg-ink) */}
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink via-ink/60 to-transparent"
                    aria-hidden="true"
                />
                {/* borde interior sutil con el color de acento */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber/15"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}