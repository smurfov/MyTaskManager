export const ROUTES = {
	home: {
		path: '/',
		name: 'Dashboard'
	},
	profile: {
		path: '/profile',
		name: 'Your Profile'
	},
	settings: {
		path: '/settings',
		name: 'Setting'
	},
	projects: {
		path: '/projects',
		name: 'Projects'
	},
	projectDetail: {
		path: '/projects/:projectId',
		name: 'Project Page'
	},
	team: {
		path: '/team',
		name: 'Team'
	}
} as const
