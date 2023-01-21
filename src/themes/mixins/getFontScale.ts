import { css, DefaultTheme } from "styled-components";

import { mediaMinWidth } from "themes/mixins/mediaQueries";

import { ExtendedPartialThemedStyledProps } from "./types";

import { theme } from "../theme";

export type FontScaleName = keyof DefaultTheme["fontScales"];

export type FontScaleProps = {
  scale?: FontScaleName;
};

export type FontScale = FontScaleName | [FontScaleName, FontScaleName];
export type ThemeAndFontScaleProps =
  ExtendedPartialThemedStyledProps<FontScaleProps>;

const getFontScale = (scale: FontScale) =>
  Array.isArray(scale)
    ? css`
        font-size: ${theme.fontScales[scale[0]][0]};
        line-height: ${theme.fontScales[scale[0]][1]};

        ${mediaMinWidth.lg(css`
          font-size: ${theme.fontScales[scale[1]][0]};
          line-height: ${theme.fontScales[scale[1]][1]};
        `)}
      `
    : css`
        font-size: ${theme.fontScales[scale][0]};
        line-height: ${theme.fontScales[scale][1]};
      `;

export { getFontScale };
