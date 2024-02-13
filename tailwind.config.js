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
      '30' : '30px',
      '50' : '50px',
      '60' : '60px',
      '100' : '100px',
      '120' : '120px',
      '150' : '150px',
      '200' : '200px',
      '250' : '250px',
      '300' : '300px',
      '400' : '400px',
      '450' : '450px',
      '500' : '500px',
      '600' : '600px',
      '650' : '650px',
      '700' : '700px',
      '750' : '750px',
      '800' : '800px',
      },
      colors: {
        'bg-primary-blue': '#181a1d',
        'primary-white': '#ffffff',
      },
    },
  },
  plugins: [],
}

