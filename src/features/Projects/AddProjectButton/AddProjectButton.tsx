import { FaPlus } from 'react-icons/fa'

import { useUIStore } from '@/shared/stores/ui.store'
import { Button } from '@/shared/ui/Button/Button'

export function AddProjectButton() {
	const { openModal } = useUIStore()

	return (
		<Button
			className="primary flex center"
			onClick={() => openModal('addProject')}
		>
			<FaPlus style={{ marginRight: '7px' }} /> Add Project
		</Button>
	)
}
