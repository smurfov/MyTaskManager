import { AddTaskButton } from '@/features/Tasks/AddTaskButton/AddTaskButton'
import { useTaskState } from '@/shared/stores/task.store'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'
import './AddTaskModal.scss'

interface AddTaskModalProps {
	closeModal: () => void
}

export function AddTaskModal({ closeModal }: AddTaskModalProps) {
	const addTask = useTaskState(state => state.addTask)

	const [taskTitle, setTaskTitle] = useState<string>('')
	const [taskDescription, setTaskDescription] = useState<string>('')
	const [errors, setErrors] = useState<{
		title?: string
		description?: string
	}>({})

	const handleAddTask = () => {
		const newErrors: { title?: string; description?: string } = {}

		if (taskTitle.length < 3) {
			newErrors.title = 'Title must be at least 3 characters long'
		}

		if (taskDescription.length < 3) {
			newErrors.description = 'Description must be at least 3 characters long'
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors)
			return
		}

		addTask(taskTitle, taskDescription)
		setTaskTitle('')
		setTaskDescription('')
		toast.success('Task added successfully!')
		closeModal()
	}

	return (
		<div className="add-task-modal">
			<div className="add-task-modal__body">
				<button onClick={closeModal} className="add-task-modal__btn-close">
					<IoMdClose />
				</button>
				<div className="add-task-modal__list">
					<div className="add-task-modal__item">
						<div className="title">Title</div>
						<input
							type="text"
							placeholder="Type a title for a task"
							value={taskTitle}
							onChange={e => setTaskTitle(e.target.value)}
						/>
						{errors.title && <div className="error">{errors.title}</div>}
					</div>
					<div className="add-task-modal__item">
						<div className="title">Description</div>
						<input
							type="text"
							placeholder="Type a description for a task"
							value={taskDescription}
							onChange={e => setTaskDescription(e.target.value)}
						/>
						{errors.description && (
							<div className="error">{errors.description}</div>
						)}
					</div>
				</div>
				<AddTaskButton
					className="add-task-modal__btn-add"
					onClick={handleAddTask}
					type="button"
				>
					Add Task
				</AddTaskButton>
			</div>
		</div>
	)
}
