import type { ComponentProps, ReactNode } from 'react'

import { useUIStore } from '@/shared/stores/ui.store'
import { Button } from '@/shared/ui/Button/Button'

type AddTaskButtonProps = {
	children: ReactNode
	className?: string
} & ComponentProps<'button'>

export function AddTaskButton({ ...props }: AddTaskButtonProps) {
	const { openModal } = useUIStore()

	return <Button onClick={() => openModal('addTask')} {...props} />
}
