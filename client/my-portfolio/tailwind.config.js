module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('./image/Backg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

