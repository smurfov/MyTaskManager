import { create } from 'zustand'

import type { IUser } from '@/entities/User/model/user.type'

interface UserState {
	user: IUser | null
	updateUser: (data: Partial<IUser>) => void
}

const mockUser: IUser = {
	id: 123,
	name: 'smurfov',
	email: 'smurfov@example.com'
}

export const useUserStore = create<UserState>(set => ({
	user: mockUser,
	updateUser: data =>
		set(state => ({ user: state.user ? { ...state.user, ...data } : null }))
}))
