import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

import { Colors, FontWeights, TextAligns, TextTransforms } from 'themes/config';

export type ColorName = keyof Colors;
export type FontWeightName = keyof FontWeights;
export type TextTransform = keyof TextTransforms;
export type TextAlign = keyof TextAligns;

export type RegisterType = (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
