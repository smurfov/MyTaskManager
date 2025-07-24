import { matchPath, useLocation } from 'react-router-dom'

import './Header.scss'
import { ThemeToggle } from './ThemeToggle/ThemeToggle'
import { ROUTES } from '@/shared/constants/routes'

export function Header() {
	const { pathname } = useLocation()

	const currentPage = Object.values(ROUTES).find(route =>
		matchPath(route.path, pathname)
	)

	return (
		<div className="header">
			<div className="header__title">{currentPage?.name}</div>
			{/* //NOTE - There must be theme toggle (dark/light mode) */}
			<div className="theme">
				<ThemeToggle />
			</div>
		</div>
	)
}
