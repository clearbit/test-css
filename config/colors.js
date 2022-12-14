const variables = require('./variables');

// In order for Tailwind's "bg-opacity" classes to work properly,
// we need to ensure that our color values are in HEX/RGBA, and not
// the raw CSS variable value.
module.exports = {
  transparent: {
    DEFAULT: 'transparent',
  },
  gray: {
    DEFAULT: variables['gray-500'],
    0: variables['gray-0'],
    100: variables['gray-100'],
    200: variables['gray-200'],
    300: variables['gray-300'],
    400: variables['gray-400'],
    500: variables['gray-500'],
    600: variables['gray-600'],
    700: variables['gray-700'],
    800: variables['gray-800'],
    900: variables['gray-900'],
    1000: variables['gray-1000'],
  },
  blue: {
    DEFAULT: variables['blue-500'],
    0: variables['blue-0'],
    100: variables['blue-100'],
    200: variables['blue-200'],
    300: variables['blue-300'],
    400: variables['blue-400'],
    500: variables['blue-500'],
    600: variables['blue-600'],
    700: variables['blue-700'],
    800: variables['blue-800'],
    900: variables['blue-900'],
    1000: variables['blue-1000'],
  },
  navy: {
    DEFAULT: variables['navy-500'],
    0: variables['navy-0'],
    100: variables['navy-100'],
    200: variables['navy-200'],
    300: variables['navy-300'],
    400: variables['navy-400'],
    500: variables['navy-500'],
    600: variables['navy-600'],
    700: variables['navy-700'],
    800: variables['navy-800'],
    900: variables['navy-900'],
    1000: variables['navy-1000'],
  },
  aqua: {
    DEFAULT: variables['aqua-500'],
    0: variables['aqua-0'],
    100: variables['aqua-100'],
    200: variables['aqua-200'],
    300: variables['aqua-300'],
    400: variables['aqua-400'],
    500: variables['aqua-500'],
    600: variables['aqua-600'],
    700: variables['aqua-700'],
    800: variables['aqua-800'],
    900: variables['aqua-900'],
    1000: variables['aqua-1000'],
  },
  indigo: {
    DEFAULT: variables['indigo-500'],
    0: variables['indigo-0'],
    100: variables['indigo-100'],
    200: variables['indigo-200'],
    300: variables['indigo-300'],
    400: variables['indigo-400'],
    500: variables['indigo-500'],
    600: variables['indigo-600'],
    700: variables['indigo-700'],
    800: variables['indigo-800'],
    900: variables['indigo-900'],
    1000: variables['indigo-1000'],
  },
  purple: {
    DEFAULT: variables['purple-500'],
    0: variables['purple-0'],
    100: variables['purple-100'],
    200: variables['purple-200'],
    300: variables['purple-300'],
    400: variables['purple-400'],
    500: variables['purple-500'],
    600: variables['purple-600'],
    700: variables['purple-700'],
    800: variables['purple-800'],
    900: variables['purple-900'],
    1000: variables['purple-1000'],
  },
  yellow: {
    DEFAULT: variables['yellow-500'],
    0: variables['yellow-0'],
    100: variables['yellow-100'],
    200: variables['yellow-200'],
    300: variables['yellow-300'],
    400: variables['yellow-400'],
    500: variables['yellow-500'],
    600: variables['yellow-600'],
    700: variables['yellow-700'],
    800: variables['yellow-800'],
    900: variables['yellow-900'],
    1000: variables['yellow-1000'],
  },
  red: {
    DEFAULT: variables['red-500'],
    0: variables['red-0'],
    100: variables['red-100'],
    200: variables['red-200'],
    300: variables['red-300'],
    400: variables['red-400'],
    500: variables['red-500'],
    600: variables['red-600'],
    700: variables['red-700'],
    800: variables['red-800'],
    900: variables['red-900'],
    1000: variables['red-1000'],
  },
  green: {
    DEFAULT: variables['green-500'],
    0: variables['green-0'],
    100: variables['green-100'],
    200: variables['green-200'],
    300: variables['green-300'],
    400: variables['green-400'],
    500: variables['green-500'],
    600: variables['green-600'],
    700: variables['green-700'],
    800: variables['green-800'],
    900: variables['green-900'],
    1000: variables['green-1000'],
  },

  black: variables['black'],
  white: variables['white'],
  salesforce: variables['salesforce'],
  marketo: variables['marketo'],
  segment: variables['segment'],
  hubspot: variables['hubspot'],
  facebook: variables['facebook'],
  twitter: variables['twitter'],
  linkedin: variables['linkedin'],
  github: variables['github'],
};
