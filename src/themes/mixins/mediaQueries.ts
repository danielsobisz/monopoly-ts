import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';
import { breakpoints } from 'themes/config';

type BreakpointKeys = keyof typeof breakpoints;

type MediaMinWidth = Record<
  BreakpointKeys,
  (cssTemplate: FlattenInterpolation<ThemeProps<DefaultTheme>>) => FlattenSimpleInterpolation // eslint-disable-line
>;

const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];

const mediaMinWidth = breakpointKeys.reduce(
  (acc: MediaMinWidth, cur: BreakpointKeys) => ({
    ...acc,
    [cur]: (cssTemplate: FlattenInterpolation<ThemeProps<DefaultTheme>>) => css`
      @media (max-width: ${breakpoints[cur]}) {
        ${cssTemplate}
      }
    `,
  }),
  {} as MediaMinWidth
);

export { mediaMinWidth };
