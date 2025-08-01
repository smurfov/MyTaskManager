import { create } from 'zustand'

export type ModalType = 'addTask' | 'addProject' | 'confirm' | null
type ConfirmModalPayload = {
	message: string
	onResolve: (value: boolean) => void
}

type UIState = {
	activeModal: ModalType | null
	confirmPayload?: ConfirmModalPayload
	openModal: (type: ModalType, payload?: ConfirmModalPayload) => void
	closeModal: () => void
}

export const useUIStore = create<UIState>(set => ({
	activeModal: null,
	confirmPayload: undefined,
	openModal: (type, payload) => {
		if (type === 'confirm' && payload) {
			set({ activeModal: type, confirmPayload: payload })
		} else {
			set({ activeModal: type, confirmPayload: undefined })
		}
	},
	closeModal: () => set({ activeModal: null, confirmPayload: undefined })
}))
