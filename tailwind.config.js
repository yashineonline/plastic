import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        plasticplanet: {
          'primary': '#0f766e',
          'secondary': '#155e75',
          'accent': '#f59e0b',
          'neutral': '#1f2937',
          'base-100': '#f8fafc',
          'base-200': '#ecfeff',
          'base-300': '#cffafe',
          'info': '#0284c7',
          'success': '#16a34a',
          'warning': '#f59e0b',
          'error': '#dc2626'
        }
      },
      'light'
    ]
  }
}
