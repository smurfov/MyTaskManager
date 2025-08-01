import { memo } from 'react'

import type { ITask } from '../model/task.type'

import styles from './TaskItem.module.scss'
import { useTaskState } from '@/shared/stores/task.store'
import { Button } from '@/shared/ui/Button/Button'

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
						? `Created: ${task.createdAt}`
						: `Updated: ${task.updatedAt}`}
				</div>
				<div className={styles.title} title={task.name}>
					{task.name}
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.status}>
						<span className={styles[task.status]}>{task.status}</span>
					</div>
					{task.priority && (
						<div className={styles.priority}>
							<span className={styles[task.priority]}>{task.priority}</span>
						</div>
					)}
					{task.deadline && (
						<div className={styles.deadline}>🕒 {task.deadline}</div>
					)}
					{task.tags && task.tags.length > 0 && (
						<div className={styles.tags}>
							{task.tags.map(tag => (
								<span key={tag} className={styles.tag}>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
				<div className={styles.right}>
					{task.assignedTo && task.assignedTo.length > 0 && (
						<div className={styles.assigned}>
							👤 {task.assignedTo.map(a => a.name).join(', ')}
						</div>
					)}
					{task.subtasks && task.subtasks.length > 0 && (
						<div className={styles.subtasks}>
							✅ {task.subtasks.filter(s => s.done).length}/
							{task.subtasks.length}
						</div>
					)}
					{task.comments && task.comments.length > 0 && (
						<div className={styles.comments}>💬 {task.comments.length}</div>
					)}
				</div>
			</div>
			<div className={styles.bottom}>
				<Button className={styles.edit} title="Edit" onClick={() => {}}>
					<i className="icon-edit" /> Edit
				</Button>
				<Button
					className={styles.delete}
					title="Delete"
					onClick={handleDeleteClick}
				>
					<i className="icon-delete" /> Delete
				</Button>
			</div>
		</div>
	)
})
