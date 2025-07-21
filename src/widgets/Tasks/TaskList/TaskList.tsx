import { useEffect, useState } from 'react'
import { Tasks } from '../../../data/task.data'
import type { ITask } from '../../../shared/types/task.type'
import { TaskItem } from '../TaskItem/TaskItem'
import './TaskList.scss'

export function TaskList() {
	const [tasksList, setTasksList] = useState<ITask[] | null>(null)

	useEffect(() => {
		setTasksList(Tasks)
	}, [])

	const handleDeleteTask = (taskToDelete: ITask) => {
		setTasksList(currentTasks => {
			if (!currentTasks) return null

			return currentTasks.filter(task => task.id !== taskToDelete.id)
		})
	}

	return (
		<div className='task-list'>
			{tasksList &&
				tasksList.length > 0 &&
				tasksList?.map((task, index) => (
					<TaskItem key={index} task={task} handleDelete={handleDeleteTask} />
				))}
		</div>
	)
}
