import { create } from 'zustand'

export type ModalType = 'addTask' | 'addProject'

type UIState = {
	activeModal: ModalType | null
	openModal: (type: ModalType) => void
	closeModal: () => void
}

export const useUIStore = create<UIState>(set => ({
	activeModal: null,
	openModal: type => set({ activeModal: type }),
	closeModal: () => set({ activeModal: null })
}))
