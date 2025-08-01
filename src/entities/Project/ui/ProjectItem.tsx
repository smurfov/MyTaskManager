import { memo } from 'react'
import { Link } from 'react-router-dom'

import type { IProject } from '../model/project.type'

import styles from './ProjectItem.module.scss'
import { ROUTES } from '@/shared/constants/routes'
import { useConfirm } from '@/shared/hooks/useConfirm'
import { useProjectState } from '@/shared/stores/project.store'

interface Props {
	project: IProject
}

export const ProjectItem = memo(({ project }: Props) => {
	const { deleteProject } = useProjectState()
	const { confirm } = useConfirm()

	const handleDeleteClick = async () => {
		const result = await confirm("Are you sure you're deleting your project?")
		if (result) {
			deleteProject(project.id)
		}
	}

	return (
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
					onClick={handleDeleteClick}
				>
					Delete
				</button>
			</div>
		</div>
	)
})
