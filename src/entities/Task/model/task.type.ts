interface AssignedToTask {
	id: number
	name: string
}


type TaskStatus = 'todo' | 'in progress' | 'done'
type TaskPriority = 'low' | 'medium' | 'high' | 'none'

interface TaskSubtask {
  name: string
  done: boolean
}

interface TaskComment {
  author: string
  text: string
  date: string
}

export interface ITask {
	id: number
	name: string
	description: string
	createdAt: string
	updatedAt?: string
	assignedTo?: AssignedToTask[]
	status: TaskStatus
	projectId?: number
  priority?: TaskPriority
  deadline?: string
  tags?: string[]
  subtasks?: TaskSubtask[]
  comments?: TaskComment[]
}
