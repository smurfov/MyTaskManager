import { memo } from 'react'

import type { ITask } from '../model/task.type'

import styles from './TaskItem.module.scss'
import { useTaskState } from '@/shared/stores/task.store'

interface Props {
	task: ITask
}

export const TaskItem = memo(({ task }: Props) => {
	const { deleteTask } = useTaskState()

	const handleDeleteClick = () => {
		deleteTask(task.id)
	}

	return (
		<div className={styles.item}>
			<div className={styles.top}>
				<div className={styles.text}>
					{task.createdAt
						? `Created At: ${task.createdAt}`
						: `Updated At: ${task.updatedAt}`}
				</div>
				<div className={styles.title}>{task.name}</div>
			</div>
			<div className={styles.content}>
				<div>Status: {task.status}</div>
				{task.assignedTo && task.assignedTo.length > 0 && (
					<div>
						Assigned to:
						{task.assignedTo?.map(assigned => (
							<span key={assigned.id}>{assigned.name}</span>
						))}
					</div>
				)}
			</div>
			<div className={styles.bottom}>
				<button className={styles.edit} onClick={() => {}}>
					Edit
				</button>
				<button className={styles.delete} onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	)
})
