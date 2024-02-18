/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
      },
      colors: {
        primary: {
          DEFAULT: '#e74853',
          light: '#ec6d75',
        },
        secondary: {
          DEFAULT: '#5d99a4',
          dark: '#46747c',
        },
        tertiary: {
          DEFAULT: '#ece5e3',
          light: '#f0eae9',
          dark: '#9c8e8c',
        },
        gray: {
          dark: '#333',
          'light-1': '#f7f7f7',
          'light-2': '#eee',
        },
      },
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        secondary: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'primary-gradient':
          'radial-gradient(circle, rgba(236,109,117,1) 85%, rgba(231,72,83,1) 100%);',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
