import type { ITask } from '../../../shared/types/task.type'
import './TaskItem.scss'

interface Props {
	task: ITask
	handleDelete: (task: ITask) => void
}

export function TaskItem({ task, handleDelete }: Props) {
	return (
		<div className='item'>
			<div className='top'>
				<div className='text'>
					{task.createdAt
						? `Created At: ${task.createdAt}`
						: `Updated At: ${task.updatedAt}`}
				</div>
				<div className='title'>{task.name}</div>
			</div>
			<div className='content'>
				<div>Status: {task.status}</div>
				{task.assignedTo && task.assignedTo.length > 0 && (
					<div>
						Assigned to:
						{task.assignedTo?.map(assigned => (
							<span>{assigned.name}</span>
						))}
					</div>
				)}
			</div>
			<div className='bottom'>
				<button className='edit' onClick={() => {}}>
					Edit
				</button>
			</div>
			<button
				className='delete'
				onClick={() => {
					handleDelete(task)
				}}
			>
				Delete
			</button>
		</div>
	)
}
