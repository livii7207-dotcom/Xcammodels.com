import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: '#ff1493',
        background: '#0a0e27',
        card: '#1a1f3a',
        secondary: '#2d3561',
        border: '#3d4570',
      },
    },
  },
  plugins: [],
} satisfies Config
