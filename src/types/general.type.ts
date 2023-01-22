import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

import { Colors } from "themes/config";

export type ColorName = keyof Colors;

export type RegisterType = (
  name: string,
  options?: RegisterOptions
) => UseFormRegisterReturn;
