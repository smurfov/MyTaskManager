interface AssignedToTask {
	id: number
	name: string
}

type TaskStatus = 'completed' | 'in progress' | 'not started'

export interface ITask {
	id: number
	name: string
	description: string
	createdAt: string
	updatedAt?: string
	assignedTo?: AssignedToTask[]
	status: TaskStatus
	projectId?: number
}
