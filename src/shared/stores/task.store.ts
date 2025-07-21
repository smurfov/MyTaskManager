import { create } from 'zustand'
import type { ITask } from '@/shared/types/task.type'
import { Tasks } from '@/data/task.data'

interface TaskState {
	tasks: ITask[]
	addTask: (title: string, description: string) => void
	deleteTask: (taskId: number) => void
}

export const useTaskState = create<TaskState>(set => ({
	tasks: Tasks,
	addTask: (title, description) => {
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
				status: 'not started'
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
