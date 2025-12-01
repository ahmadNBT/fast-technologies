
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 2s linear infinite',
        'move-right': 'moveRight 8s linear infinite',
        'move-right-delayed': 'moveRight 8s linear infinite 2s',
        'move-right-slow': 'moveRight 12s linear infinite 4s',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 100px))', opacity: '0' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(92, 201, 245, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(92, 201, 245, 0.6)' },
        },
      },
      backdropBlur: {
        '18': '18px',
        '24': '24px',
      },
    },
  },
  plugins: [],
} satisfies Config
