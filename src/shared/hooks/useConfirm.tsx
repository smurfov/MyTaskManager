import { useRef } from 'react'

import { useUIStore } from '@/shared/stores/ui.store'

/**
 * Хук для асинхронного подтверждения действия через ConfirmModal
 */
export function useConfirm() {
	const resolver = useRef<((value: boolean) => void) | null>(null)
	const { openModal, closeModal } = useUIStore()

	// Вызывается из компонента, где нужно подтверждение
	const confirm = (message: string): Promise<boolean> => {
		return new Promise<boolean>(res => {
			resolver.current = (value: boolean) => {
				res(value)
				closeModal()
			}
			openModal('confirm', {
				message,
				onResolve: (value: boolean) => resolver.current?.(value)
			})
		})
	}

	return { confirm }
}
