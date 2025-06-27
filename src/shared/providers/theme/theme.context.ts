import { createContext } from "react";
import type { IThemeContext } from "../../types/theme.type";

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
