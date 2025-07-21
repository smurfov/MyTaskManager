import { useTaskState } from '@/shared/stores/task.store'
import type { ITask } from '@/shared/types/task.type'
import { TaskItem } from '@/widgets/Tasks/TaskItem/TaskItem'
import './TaskList.scss'

export function TaskList() {
	const { tasks, deleteTask } = useTaskState()
	const handleDeleteTask = (taskToDelete: ITask) => {
		deleteTask(taskToDelete.id)
	}

	return (
		<div className="task-list">
			{tasks &&
				tasks.length > 0 &&
				tasks.map(task => (
					<TaskItem
						key={task.id}
						task={task}
						handleDelete={() => handleDeleteTask(task)}
					/>
				))}
		</div>
	)
}
