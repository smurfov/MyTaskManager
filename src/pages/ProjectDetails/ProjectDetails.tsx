import { useParams } from 'react-router-dom'

import { useRedirectBakOrHome } from '@/shared/hooks/useRedirectBakOrHome'
import { useProjectState } from '@/shared/stores/project.store'

export function ProjectDetails() {
	const { projectId } = useParams()
	const { getProjectById } = useProjectState()

	const currentProject = getProjectById(Number(projectId))

	useRedirectBakOrHome(currentProject === undefined)

	if (currentProject === undefined) {
		return null
	}

	// TODO
	/*
		Render title, description.
		List of tasks with options to add, delete, and edit tasks.
		Use the `useTaskState` store to manage tasks.
		Use the `useUIStore` store to manage modals for adding/editing tasks
		Use the `useProjectState` store to get project details.
		Use the `useParams` hook to get the projectId from the URL.
		Members of the project can be displayed if available.
	*/

	return <div>{currentProject?.name}</div>
}
