import styles from './Projects.module.scss'
import { AddProjectButton } from '@/features/Projects/AddProjectButton/AddProjectButton'
import { ProjectList } from '@/features/Projects/ProjectList/ProjectList'

export function Projects() {
	return (
		<>
			<div className={styles.projectsTitle}>My Projects</div>
			<div className={styles.projects}>
				<AddProjectButton />
				<ProjectList />
			</div>
		</>
	)
}
