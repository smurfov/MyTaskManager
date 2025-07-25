import { memo } from 'react'

import type { IProject } from '../model/project.type'

import styles from './ProjectItem.module.scss'
import { useProjectState } from '@/shared/stores/project.store'

interface Props {
	project: IProject
}

export const ProjectItem = memo(({ project }: Props) => {
	const { deleteProject } = useProjectState()

	const handleDeleteClick = () => {
		deleteProject(project.id)
	}

	return (
		<div className={styles.item}>
			<div className={styles.top}>
				<div className={styles.title}>{project.name}</div>
			</div>
			<div className={styles.content}>
				<div className={styles.bottom}></div>
				<button className={styles.delete} onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	)
})
