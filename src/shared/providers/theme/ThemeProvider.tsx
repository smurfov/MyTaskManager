import { type ReactNode, useEffect, useState } from 'react'

import { ThemeContext } from './theme.context'
import type { ThemeType } from '@/shared/types/theme.type'

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<ThemeType>(() => {
		const savedTheme = localStorage.getItem('theme')
		return (savedTheme as ThemeType) || 'dark'
	})

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
