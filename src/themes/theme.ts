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
  borderRadius,
  BorderRadiuses,
} from './config';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme {
    colors: Colors;
    fontScales: FontScales;
    fontWeights: FontWeights;
    maxWidth: string;
    transitionSpeed: string;
    borderRadius: BorderRadiuses;
    textTransforms: TextTransforms;
    textAligns: TextAligns;
  }
}

const theme: DefaultTheme = {
  colors,
  fontWeights,
  textTransforms,
  borderRadius,
  fontScales,
  maxWidth: '117rem',
  transitionSpeed: '200ms',
  textAligns,
};

export { theme };
