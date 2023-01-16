// Breakpoints
type BreakpointKeys = "sm" | "md" | "lg" | "xl" | "2xl";
export type Breakpoints = Record<BreakpointKeys, string>;
const breakpoints: Breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Font Scales
const fontScales = {
  xs: ["1.2rem", "1.9rem"],
  s: ["1.4rem", "2.3rem"],
  base: ["1.6rem", "2.4rem"],
  lg: ["1.8rem", "2.9rem"],
  xl: ["2.4rem", "3.8rem"],
  xl1: ["2.5rem", "4rem"],
  xl2: ["2.8rem", "4.5rem"],
  xl3: ["3rem", "4.8rem"],
  xl4: ["4.8rem", "7.8rem"],
  xl5: ["6rem", "10.1rem"],
} as const;
export type FontScales = typeof fontScales;

// Font Weights
const fontWeights = {
  extraLight: "300",
  light: "400",
  normal: "500",
  bold: "600",
  extraBold: "700",
} as const;

export type FontWeights = typeof fontWeights;

const textTransforms = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  lowercase: "lowercase",
  none: "none",
  isFirstLetterUppercase: "isFirstLetterUppercase",
} as const;

export type TextTransforms = typeof textTransforms;

const textAligns = {
  center: "center",
  left: "left",
  right: "right",
  justify: "justify",
} as const;

export type TextAligns = typeof textAligns;

// Colors
const colors = {
  inherit: "inherit",

  black: "#080808",
  board: "#fafaf8",
} as const;

export type Colors = typeof colors;

export {
  breakpoints,
  fontScales,
  fontWeights,
  textTransforms,
  textAligns,
  colors,
};
