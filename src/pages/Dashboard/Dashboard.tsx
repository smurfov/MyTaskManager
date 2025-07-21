import { AddTaskButton } from '@/features/Tasks/addTaskButton'
import { useTaskState } from '@/shared/stores/task.store'
import { TaskList } from '@/widgets/Tasks/TaskList/TaskList'
import './Dashboard.scss'

export function Dashboard() {
	const addTask = useTaskState(state => state.addTask)

	const handleAddTask = () => {
		addTask('Zustand', 'Походу он работает')
		//TODO - Make a modal for add a task
	}

	return (
		<>
			<div className="title">My Tasks</div>
			<div className="tasks">
				<AddTaskButton onClick={handleAddTask} type="button">
					Add Task
				</AddTaskButton>
				<TaskList />
			</div>
		</>
	)
}
