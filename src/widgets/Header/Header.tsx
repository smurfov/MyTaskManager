import { matchPath, useLocation } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes'
import './Header.scss'
import { ThemeToggle } from './ThemeToggle/ThemeToggle'

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
