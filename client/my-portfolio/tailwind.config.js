module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/Backg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


