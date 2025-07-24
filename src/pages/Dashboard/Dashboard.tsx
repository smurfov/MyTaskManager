import { FaPlus } from 'react-icons/fa'

import './Dashboard.scss'
import { AddTaskButton } from '@/features/Tasks/AddTaskButton/AddTaskButton'
import { TaskList } from '@/features/Tasks/TaskList/TaskList'

export function Dashboard() {
	return (
		<>
			<div className="title">My Tasks</div>
			<div className="tasks">
				<AddTaskButton className="flex center" type="button">
					<FaPlus style={{ marginRight: '7px' }} /> Add Task
				</AddTaskButton>
				<TaskList />
			</div>
		</>
	)
}
