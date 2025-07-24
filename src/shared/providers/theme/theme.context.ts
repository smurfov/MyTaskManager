import { createContext } from 'react'

import type { IThemeContext } from '@/shared/types/theme.type'

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
