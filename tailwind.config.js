/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          50: '#fffaf7',
          100: '#fff0e6',
          200: '#ffd8b8',
          300: '#ffbf89',
          400: '#ff9f50',
          500: '#ff7f17',
          600: '#e06310',
          700: '#b84d0d',
          800: '#8e3d0a',
          900: '#5f2806',
        },
        roast: {
          50: '#fbf9f7',
          100: '#f2ede6',
          200: '#e1d3c7',
          300: '#c1ad91',
          400: '#a07a62',
          500: '#805034',
          600: '#6d4428',
          700: '#58351f',
          800: '#2b2118',
          // make the darkest roast almost black for dark mode
          900: '#050405',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
        papyrus: ['"Papyrus"', '"Papyrus Regular"', 'cursive'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

