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
        episodes: { 'max': '1372px'},
        normal: { 'max': '1260px'},
        blog: { 'max': '946px' },
        blogsm: { 'max': '628px' },
        nav: { 'max' : '790px' },
        'md-max': { 'max': '840px' },
        'sm-max': { 'max': '639px' }
      }
    },
  },
  plugins: [],
}

