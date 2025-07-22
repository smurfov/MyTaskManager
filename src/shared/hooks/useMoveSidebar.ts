import { useState } from 'react'

export function useMoveSidebar() {
	const [isActive, setIsActive] = useState<boolean>(window.innerWidth > 768)

	const handleHideSidebar = () => {
		if (isActive) setIsActive(false)
		else setIsActive(true)
	}

	return { isActive, handleHideSidebar }
}
