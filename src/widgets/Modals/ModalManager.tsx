import { useUIStore } from '@/shared/stores/ui.store'
import { AddProjectModal } from './AddProjectModal/AddProjectModal'
import { AddTaskModal } from './AddTaskModal/AddTaskModal'

export function ModalManager() {
	const { activeModal } = useUIStore()

	switch (activeModal) {
		case 'addTask':
			return <AddTaskModal />
		case 'addProject':
			return <AddProjectModal />
		default:
			return null
	}
}
