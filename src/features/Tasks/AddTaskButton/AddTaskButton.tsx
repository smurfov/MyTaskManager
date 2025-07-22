import type { ComponentProps, ReactNode } from 'react'
import './AddTaskButton.scss'

type AddTaskButtonProps = {
	children: ReactNode
	className?: string
} & ComponentProps<'button'>

export function AddTaskButton({
	children,
	className,
	...rest
}: AddTaskButtonProps) {
	return (
		<button className={`task__button-add ${className || ''}`} {...rest}>
			{children}
		</button>
	)
}
