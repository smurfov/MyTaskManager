import { AddTaskButton } from '@/features/Tasks/AddTaskButton/AddTaskButton'
import { useOpenModal } from '@/shared/hooks/useOpenModal'
import { AddTaskModal } from '@/widgets/Modals/AddTaskModal/AddTaskModal'
import { TaskList } from '@/widgets/Tasks/TaskList/TaskList'
import { FaPlus } from 'react-icons/fa'
import './Dashboard.scss'

export function Dashboard() {
	const { isOpen, handleTouchModal } = useOpenModal()

	return (
		<>
			<div className="title">My Tasks</div>
			<div className="tasks">
				<AddTaskButton
					onClick={handleTouchModal}
					className="flex center"
					type="button"
				>
					<FaPlus style={{ marginRight: '7px' }} /> Add Task
				</AddTaskButton>
				{isOpen && <AddTaskModal closeModal={handleTouchModal} />}
				<TaskList />
			</div>
		</>
	)
}
