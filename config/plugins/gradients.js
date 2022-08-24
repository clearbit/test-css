const plugin = require('tailwindcss/plugin');

const gradientsPlugin = plugin(function boxShadow({ addUtilities, theme }) {
  const colorMap = theme('linearGradientColors');
  const colors = Object.keys(colorMap);

  try {
    colors.forEach(color => {
      const utilities = {
        [`.fill-gradient-b-${color}`]: {
          fill: `url(#gradient-b-${color})`,
        },
        [`.fill-gradient-t-${color}`]: {
          fill: `url(#gradient-t-${color})`,
        },
        [`.fill-gradient-br-${color}`]: {
          fill: `url(#gradient-br-${color})`,
        },
        [`.fill-gradient-tl-${color}`]: {
          fill: `url(#gradient-tl-${color})`,
        },
      };

      addUtilities(utilities);
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
});

module.exports = gradientsPlugin;
