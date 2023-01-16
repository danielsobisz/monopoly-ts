import { DefaultTheme } from 'styled-components';
import {
  fontScales,
  FontScales,
  fontWeights,
  FontWeights,
  textTransforms,
  TextTransforms,
  colors,
  Colors,
  TextAligns,
  textAligns,
} from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontScales: FontScales;
    fontWeights: FontWeights;
    maxWidth: string;
    transitionSpeed: string;
    headerHeight: string;
    borderRadius: Record<string, string>;
    textTransforms: TextTransforms;
    textAligns: TextAligns;
  }
}

const theme: DefaultTheme = {
  colors,
  fontWeights,
  textTransforms,
  borderRadius: {
    base: '0.3rem',
    big: '0.6rem',
    big2: '1.6rem',
  },
  fontScales,
  maxWidth: '117rem',
  headerHeight: '6rem',
  transitionSpeed: '200ms',
  textAligns,
};

export { theme };
