/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg:       'rgb(var(--bg)       / <alpha-value>)',
        surface:  'rgb(var(--surface)  / <alpha-value>)',
        surface2: 'rgb(var(--surface2) / <alpha-value>)',
        line: {
          DEFAULT: 'rgb(var(--line)  / <alpha-value>)',
          2:       'rgb(var(--line2) / <alpha-value>)',
          3:       'rgb(var(--line3) / <alpha-value>)',
        },
        t1: 'rgb(var(--t1) / <alpha-value>)',
        t2: 'rgb(var(--t2) / <alpha-value>)',
        t3: 'rgb(var(--t3) / <alpha-value>)',
        t4: 'rgb(var(--t4) / <alpha-value>)',
        t5: 'rgb(var(--t5) / <alpha-value>)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'blink':      'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
