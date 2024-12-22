module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/public/Backg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


