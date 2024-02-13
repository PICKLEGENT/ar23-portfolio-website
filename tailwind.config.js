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
      '50' : '50px',
      '60' : '60px',
      '100' : '100px',
      '150' : '150px',
      },
      colors: {
        'bg-primary-blue': '#181a1d',
        'primary-white': '#ffffff',
      },
    },
  },
  plugins: [],
}

