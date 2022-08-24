const plugin = require('tailwindcss/plugin');
const Color = require('color');
const variables = require('../variables');

const variablesPlugin = plugin(function cssVariables({ addUtilities }) {
  const variableDefinitions = Object.keys(variables).reduce(
    (acc, variableName) => {
      const currentVariable = variables[variableName];

      // Only generate rgb variables for hex codes
      if (currentVariable.includes('#')) {
        const color = Color(currentVariable);

        /**
         * When CSS Color Module 5 ships to browsers we can remove this if statement
         * that generates rgb custom properties (e.g., --blue-500-rgb: 20 140 252;)
         * We can use hex codes in something like rgba(from var(--blue-500) r g b .5)
         * @see https://dev.to/fabiogiolito/create-a-color-theme-with-these-upcoming-css-features-4o83
         */
        const rgbColor = color
          .rgb()
          .array()
          .join(' ');

        acc[`--${variableName}`] = currentVariable;
        acc[`--${variableName}-rgb`] = rgbColor;
      } else {
        acc[`--${variableName}`] = currentVariable;
      }

      return acc;
    },
    {},
  );

  addUtilities({
    ':root': {
      ...variableDefinitions,
    },
  });
});

module.exports = variablesPlugin;
