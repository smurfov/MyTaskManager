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

	return <div>{currentProject?.name}</div>
}
