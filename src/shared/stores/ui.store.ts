import { create } from 'zustand'

type UIState = {
	isAddTaskModalOpen: boolean
	openAddTaskModal: () => void
	closeAddTaskModal: () => void
}

export const useUIStore = create<UIState>(set => ({
	isAddTaskModalOpen: false,
	openAddTaskModal: () => set({ isAddTaskModalOpen: true }),
	closeAddTaskModal: () => set({ isAddTaskModalOpen: false })
}))
