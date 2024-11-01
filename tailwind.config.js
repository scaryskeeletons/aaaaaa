/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      dropShadow: {
        'glow': '0 0 15px rgba(239,68,68,0.5)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(239,68,68,0.3)',
      },
      scale: {
        '175': '1.75',
      },
    },
  },
  plugins: [],
};