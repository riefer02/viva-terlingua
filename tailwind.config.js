module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e74853',
        'primary-light': '#ec6d75',
        secondary: '#5d99a4',
        'secondary-dark': '#46747c',
        tertiary: '#ece5e3',
        'tertiary-light': '#f0eae9',
        'gray-dark': '#333',
        'gray-light-1': '#f7f7f7',
        'gray-light-2': '#eee',
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
  plugins: [],
};
