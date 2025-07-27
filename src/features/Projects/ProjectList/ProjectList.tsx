import styles from './ProjectList.module.scss'
import { ProjectItem } from '@/entities/Project/ui/ProjectItem'
import { useProjectState } from '@/shared/stores/project.store'

export function ProjectList() {
	const { projects } = useProjectState()

	return (
		<div className={styles.projectsList}>
			{projects.map(project => (
				<ProjectItem project={project} key={project.id} />
			))}
		</div>
	)
}
