/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx,}',
    './components/**/*.{html,js,jsx,ts,tsx,}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary-blue': '#181a1d',
        'primary-white': '#ffffff',
      },
    },
  },
  plugins: [],
}

