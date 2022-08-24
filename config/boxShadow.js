module.exports = function boxShadow(theme) {
  return {
    xs: `0 0 0 1px rgba(${theme('colors.navy.400')}, .15)`,
    sm: `0 0 0 1px rgba(${theme(
      'colors.navy.300',
    )}, .05), 0 1px 2px rgba(${theme('colors.gray.500')}, .15)`,
    DEFAULT: `0 0 0 1px rgba(${theme(
      'colors.navy.300',
    )}, .15), 0 1px 2px 1px rgba(${theme('colors.black')}, .05)`,
    md: `0 0 0 1px rgba(${theme(
      'colors.navy.300',
    )}, .05), 0 1px 2px rgba(${theme(
      'colors.gray.600',
    )}, .15), 0 2px 8px rgba(${theme('colors.gray.600')}, .1)`,
    lg: `0 0 0 1px rgba(${theme(
      'colors.navy.300',
    )}, .05), 0 1px 3px rgba(${theme(
      'colors.gray.600',
    )}, .15), 0 3px 15px rgba(${theme('colors.gray.600')}, .2)`,
    xl: `0 0 0 1px rgba(${theme(
      'colors.navy.300',
    )}, .15), 0 1px 3px rgba(${theme(
      'colors.gray.600',
    )}, .15), 0 3px 15px 2px rgba(${theme('colors.gray.600')}, .2)`,
    '2xl': `0 0 0 1px rgba(${theme(
      'colors.navy.300',
    )}, .15), 0 4px 8px rgba(${theme(
      'colors.gray.600',
    )}, .15), 0 6px 24px 10px rgba(${theme('colors.gray.600')}, .2)`,
    inner: `inset 0 0 1px 1px rgba(${theme(
      'colors.gray.400',
    )}, .15), inset 0 1px 3px rgba(${theme(
      'colors.gray.500',
    )}, .15), inset 0 0 0 1px rgba(${theme('colors.navy.300')}, .15)`,
    inset: `inset 0 0 0 1px rgba(${theme('colors.navy.400')}, .15)`,
    none: 'none',
  };
};
