import type { ComponentProps, ReactNode } from 'react'
import './addTaskButton.scss'

type AddTaskButtonProps = {
	children: ReactNode
} & ComponentProps<'button'>

export function AddTaskButton({ children, ...rest }: AddTaskButtonProps) {
	return (
		<button className="task__button-add" {...rest}>
			{children}
		</button>
	)
}
