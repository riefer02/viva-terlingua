module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e74853',
        'primary-light': ' #ec6d75',
        secondary: '#5d99a4',
        tertiary: '#ece5e3',
        'tertiary-light': '#f0eae9',
        'gray-dark': '#333',
      },
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        secondary: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
