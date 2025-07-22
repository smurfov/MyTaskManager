import { useState } from 'react'

export function useOpenModal() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleTouchModal = () => {
		if (isOpen) setIsOpen(false)
		else setIsOpen(true)
	}

	return { isOpen, handleTouchModal }
}
