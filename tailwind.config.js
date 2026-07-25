/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: 'var(--color-navy)',
                    deep: 'var(--color-navy-deep)',
                    surface: 'var(--color-navy-surface)',
                    surface2: 'var(--color-navy-surface2)'
                },
                border: 'var(--color-border)',
                muted: 'var(--color-muted)',
                paper: 'var(--color-paper)',
                cyan: {
                    DEFAULT: 'var(--color-cyan)',
                    soft: 'var(--color-cyan-soft)'
                },
                pitch: 'var(--color-pitch)'
            },
            fontFamily: {
                display: ['"Orbitron"', 'ui-sans-serif', 'sans-serif'],
                hud: ['"Rajdhani"', 'ui-sans-serif', 'sans-serif'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
            },
            backgroundImage: {
                grid: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
                stadium: 'repeating-linear-gradient(90deg, rgba(15,77,58,0.35) 0px, rgba(15,77,58,0.35) 40px, rgba(11,19,43,0.35) 40px, rgba(11,19,43,0.35) 80px)'
            },
            backgroundSize: {
                grid: '44px 44px'
            },
            boxShadow: {
                glow: 'var(--shadow-glow)',
                glowSoft: 'var(--shadow-glow-soft)',
                glowLg: 'var(--shadow-glow-lg)'
            },
            clipPath: {
                bevel: 'polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 8px rgba(0,245,212,0.6))' },
                    '50%': { opacity: 0.7, filter: 'drop-shadow(0 0 20px rgba(0,245,212,0.9))' }
                },
                'roll': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                'scan': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'pulse-glow-pitch': {
                    '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.7))' },
                    '50%': { opacity: 0.75, filter: 'drop-shadow(0 0 16px rgba(16,185,129,0.9))' }
                },
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
            },
            animation: {
                'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
                'roll': 'roll 1.1s linear infinite',
                'scan': 'scan 2.5s linear infinite',
                'pulse-glow-pitch': 'pulse-glow-pitch 2.2s ease-in-out infinite',
                'spin-slow': 'spin-slow 12s linear infinite'
            }
        }
    },
    plugins: []
}
