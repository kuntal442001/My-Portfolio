/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050505',
          900: '#050505',
          800: '#0a0a0a',
          700: '#111111',
          600: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#00FF88',
          soft: '#00FF88',
          muted: '#00cc6a',
        },
        teal: {
          DEFAULT: '#4FD1C5',
          soft: '#4FD1C5',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      animation: {
        'aurora-slow': 'aurora 18s ease-in-out infinite',
        'aurora-fast': 'aurora 12s ease-in-out infinite',
        'streak': 'streak 8s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 32s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.55' },
          '50%': { transform: 'translate3d(4%, -3%, 0) scale(1.15)', opacity: '0.85' },
        },
        streak: {
          '0%': { transform: 'translateX(-100%) translateY(0)', opacity: '0' },
          '20%': { opacity: '0.5' },
          '80%': { opacity: '0.5' },
          '100%': { transform: 'translateX(120%) translateY(0)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
