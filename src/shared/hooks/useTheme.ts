import { useContext } from 'react'

import { ThemeContext } from '@/shared/providers/theme/theme.context'

export function useTheme() {
	return useContext(ThemeContext)
}
