const colors = require('./colors');
const fontFamily = require('./fontFamily');
const fontSize = require('./fontSize');
const borderRadius = require('./borderRadius');
const boxShadow = require('./boxShadow');
const spacing = require('./spacing');
const opacity = require('./opacity');
const inset = require('./inset');
const linearGradientColors = require('./linearGradientColors');

module.exports = {
  plugins: [require('./plugins/gradients'), require('./plugins/css-variables')],
  content: [
    './src/**/*.{html,js,jsx,tsx,ts}',
    './node_modules/@clearkit/react/**/*.{js,jsx,tsx,ts}',
  ],
  theme: {
    extend: {
      colors,
      maxHeight: theme => theme('maxWidth'),
      minHeight: theme => theme('spacing'),
      minWidth: theme => theme('spacing'),
      gradientColorStops: theme => {
        return theme('colors');
      },
      spacing,
      opacity,
      inset,
      fontFamily,
      fontSize,
      borderRadius,
      boxShadow: theme => boxShadow(theme),
      linearGradientColors,
    },
  },
  safelist: [
    {
      pattern: /bg-()/,
    },
  ],
};
