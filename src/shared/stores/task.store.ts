import { create } from 'zustand'

import type { ITask } from '@/entities/Task'
import { taskMock } from '@/entities/Task/lib/task.mock'

interface TaskState {
	tasks: ITask[]
	addTask: (title: string, description: string) => void
	deleteTask: (taskId: number) => void
}

const getInitialTasks = () => {
	if (import.meta.env.DEV) {
		return taskMock
	}
	return []
}

export const useTaskState = create<TaskState>(set => ({
	tasks: getInitialTasks(),
	addTask: (title, description, projectId = undefined) => {
		set(state => {
			const timestamp = Date.now()
			const date = new Date(timestamp)
			const formatter = new Intl.DateTimeFormat('ru-RU', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric'
			})
			const formattedDate = formatter.format(date)

			const maxId = state.tasks.reduce(
				(max, task) => (task.id > max ? task.id : max),
				0
			)

			const newTask: ITask = {
				createdAt: formattedDate,
				description,
				id: maxId + 1,
				name: title,
				status: 'not started',
				projectId
			}

			return { tasks: [...state.tasks, newTask] }
		})
	},
	deleteTask: taskId => {
		set(state => ({
			tasks: state.tasks.filter(task => task.id !== taskId)
		}))
	}
}))
