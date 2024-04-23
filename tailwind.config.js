/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#161FFF',
      },
      screens: {
        blog: { 'max': '946px' },
        blogsm: { 'max': '628px' },
        nav: { 'max' : '790px' },
        'sm-max': { 'max': '639px' }
      }
    },
  },
  plugins: [],
}

