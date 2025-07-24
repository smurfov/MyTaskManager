import styles from './TaskList.module.scss'
import { TaskItem } from '@/entities/Task'
import { useTaskState } from '@/shared/stores/task.store'

export function TaskList() {
	const { tasks } = useTaskState()

	return (
		<div className={styles.taskList}>
			{tasks &&
				tasks.length > 0 &&
				tasks.map(task => <TaskItem key={task.id} task={task} />)}
		</div>
	)
}
