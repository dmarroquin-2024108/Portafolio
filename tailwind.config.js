/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                ink: '#0B0C10',
                surface: '#14161D',
                surface2: '#1B1E27',
                border: '#262A35',
                muted: '#8A8F9C',
                paper: '#E7E7EA',
                amber: {
                    DEFAULT: '#F5B942',
                    soft: '#F7C766'
                },
                mint: '#6EE7B7'
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'monospace'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
            },
            backgroundImage: {
                grid: 'linear-gradient(to right, #1B1E27 1px, transparent 1px), linear-gradient(to bottom, #1B1E27 1px, transparent 1px)'
            },
            backgroundSize: {
                grid: '40px 40px'
            }
        }
    },
    plugins: []
}