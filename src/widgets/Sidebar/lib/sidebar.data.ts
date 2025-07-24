import { ROUTES } from '@/shared/constants/routes'

export const MAIN_MENU_LINKS = [
	{ to: ROUTES.home.path, text: 'Dashboard' },
	{ to: ROUTES.team.path, text: 'Team' },
	{ to: ROUTES.settings.path, text: 'Settings' }
]

export const PROJECTS_LINKS = [
	{ to: ROUTES.project.path, text: 'My Project' },
	{ to: ROUTES.project.path, text: 'Your Project' },
	{ to: ROUTES.project.path, text: 'Other Project' }
]
