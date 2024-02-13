/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      },
      spacing: {
      '60' : '60px',
      },
      colors: {
        'bg-primary-blue': '#181a1d',
        'primary-white': '#ffffff',
      },
    },
  },
  plugins: [],
}

