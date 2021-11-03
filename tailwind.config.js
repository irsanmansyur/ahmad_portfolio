const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      backgroundImage: {
        'hero-header': "url('/image/bg-header.png')",
      },
      colors: {
        primary: '#00C2FF',
        sky: colors.sky,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        CenturyGothic: ["Century Gothic", ...defaultTheme.fontFamily.sans]
      },
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },


};
