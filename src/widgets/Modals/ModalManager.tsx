import { AddProjectModal } from './AddProjectModal/AddProjectModal'
import { AddTaskModal } from './AddTaskModal/AddTaskModal'
import { CofirmModal } from './ConfirmModal/CofirmModal'
import { useUIStore } from '@/shared/stores/ui.store'

export function ModalManager() {
	const { activeModal, confirmPayload } = useUIStore()

	switch (activeModal) {
		case 'addTask':
			return <AddTaskModal />
		case 'addProject':
			return <AddProjectModal />
		case 'confirm':
			return (
				<CofirmModal
					message={confirmPayload?.message ?? ''}
					onResolve={confirmPayload?.onResolve}
				/>
			)
		default:
			return null
	}
}
