// Breakpoints
type BreakpointKeys = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Breakpoints = Record<BreakpointKeys, string>;
const breakpoints: Breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Font Scales
const fontScales = {
  xs: ['1.2rem', '1.9rem'],
  s: ['1.4rem', '2.3rem'],
  base: ['1.6rem', '2.4rem'],
  lg: ['1.8rem', '2.9rem'],
  xl: ['2.4rem', '3.8rem'],
  xl1: ['2.5rem', '4rem'],
  xl2: ['2.8rem', '4.5rem'],
  xl3: ['3rem', '4.8rem'],
  xl4: ['4.8rem', '7.8rem'],
  xl5: ['6rem', '10.1rem'],
} as const;
export type FontScales = typeof fontScales;

// Font Weights
const fontWeights = {
  extraLight: '300',
  light: '400',
  normal: '500',
  bold: '600',
  extraBold: '700',
} as const;

export type FontWeights = typeof fontWeights;

const textTransforms = {
  uppercase: 'uppercase',
  capitalize: 'capitalize',
  lowercase: 'lowercase',
  none: 'none',
  isFirstLetterUppercase: 'isFirstLetterUppercase',
} as const;

export type TextTransforms = typeof textTransforms;

const textAligns = {
  center: 'center',
  left: 'left',
  right: 'right',
  justify: 'justify',
} as const;

export type TextAligns = typeof textAligns;

const borderRadius = {
  small: '0.3rem',
  medium: '0.6rem',
  big: '1.2rem',
} as const;

export type BorderRadiuses = typeof borderRadius;

// Colors
const colors = {
  inherit: 'inherit',

  black: '#080808',
  blackTransparent: 'rgba(0, 0, 0, 0.5)',
  white: '#ffffff',
  whiteOff: '#F2F2F2',

  gray: '#5A5A5A',
  backgroundGrey: '#E3E3E3',

  board: '#fafaf8',

  brown: '#640303',

  red: '#f50c2b',
  redSecondary: ' #c70000',

  orange: '#fa811d',

  purple: '#b02f7c',
  darkPurple: '#5e3577',

  lightBlue: '#d2eaf5',
  darkBlue: '#5a6dba',

  yellow: '#ffed20',

  green: '#41994e',

  disabled: '#E2E2E2',
} as const;

export type Colors = typeof colors;

export {
  breakpoints,
  fontScales,
  fontWeights,
  textTransforms,
  textAligns,
  colors,
  borderRadius,
};
