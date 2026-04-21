/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
        patrick: ['Patrick Hand', 'cursive'],
      },
      colors: {
        // CSS-variable-driven — opacity modifiers (text-ink/70) work automatically
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        sticky: 'rgb(var(--color-sticky) / <alpha-value>)',
        'accent-orange': '#fb923c',
        'accent-yellow': '#fef08a',
        'accent-red': '#ef4444',
        'accent-blue': '#60a5fa',
      },
      borderRadius: {
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        'wobbly-2': '15px 255px 15px 225px / 225px 15px 255px 15px',
        'wobbly-3': '225px 15px 255px 15px / 15px 255px 15px 225px',
      },
      boxShadow: {
        hard: '6px 6px 0px 0px rgb(var(--color-ink))',
        'hard-sm': '3px 3px 0px 0px rgb(var(--color-ink))',
        'hard-none': '0px 0px 0px 0px rgb(var(--color-ink))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        scribble: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3) translateY(40px)' },
          '60%': { opacity: '1', transform: 'scale(1.05) translateY(-5px)' },
          '80%': { transform: 'scale(0.97) translateY(2px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
