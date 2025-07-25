import { Link } from 'react-router-dom'

import styles from './ProjectList.module.scss'
import { ROUTES } from '@/shared/constants/routes'
import { type projectId, useProjectState } from '@/shared/stores/project.store'

export function ProjectList() {
	const { projects, deleteProject } = useProjectState()

	const handleDeleteProject = (projectId: projectId) => {
		deleteProject(projectId)
	}

	return (
		<div className={styles.projectsList}>
			{projects.map(project => (
				<div className={styles.projectsItem}>
					<div className={styles.projectsTitle}>{project.name}</div>
					<div className={styles.projectsBottom}>
						<Link
							className={styles.projectsBtnOpen}
							to={`${ROUTES.projects.path}/${project.id}`}
						>
							Open
						</Link>
						<button
							className={styles.projectsBtnDelete}
							type="button"
							onClick={() => {
								handleDeleteProject(project.id)
							}}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
