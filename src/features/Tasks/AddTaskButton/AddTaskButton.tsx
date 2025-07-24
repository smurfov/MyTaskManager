import type { ComponentProps, ReactNode } from 'react'

import './AddTaskButton.scss'
import { useUIStore } from '@/shared/stores/ui.store'

type AddTaskButtonProps = {
	children: ReactNode
	className?: string
} & ComponentProps<'button'>

export function AddTaskButton({
	children,
	className,
	...rest
}: AddTaskButtonProps) {
	const openAddTaskModal = useUIStore(state => state.openAddTaskModal)

	return (
		<button
			className={`task__button-add ${className || ''}`}
			onClick={openAddTaskModal}
			{...rest}
		>
			{children}
		</button>
	)
}
