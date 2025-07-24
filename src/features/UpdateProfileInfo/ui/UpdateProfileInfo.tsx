import { useState } from 'react'
import { toast } from 'react-toastify'

import style from './UpdateProfileInfo.module.scss'
import { useUserStore } from '@/shared/stores/user.store'

const EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/

export function UpdateProfileInfo() {
	const { user, updateUser } = useUserStore()

	const [userName, setUserName] = useState<string>(user?.name || '')
	const [userEmail, setUserEmail] = useState<string>(user?.email || '')
	const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

	const validateForm = () => {
		const newErrors: { name?: string; email?: string } = {}

		if (userName.trim().length < 2) {
			newErrors.name = 'Name must be at least 2 characters long'
		}

		if (!EMAIL_REGEX.test(userEmail)) {
			newErrors.email = 'Please enter a valid email address'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleUpdateUser = () => {
		const isFormValid = validateForm()

		if (isFormValid) {
			updateUser({ name: userName, email: userEmail })
			toast.success('User data successfully updated')
		}
	}

	return (
		<div className={style.updateUserForm}>
			<div className={style.updateUserFormItem}>
				<div className={style.updateUserFormTitle}>Name</div>
				<input
					type="text"
					name="user-name"
					id="user-name"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					className={style.updateUserFormInput}
				/>
				{errors.name && <div className={style.error}>{errors.name}</div>}
			</div>
			<div className={style.updateUserFormItem}>
				<div className={style.updateUserFormTitle}>E-mail</div>
				<input
					type="email"
					name="user-email"
					id="user-email"
					value={userEmail}
					onChange={e => setUserEmail(e.target.value)}
					className={style.updateUserFormInput}
				/>
				{errors.email && <div className={style.error}>{errors.email}</div>}
			</div>
			<button className={style.updateUserFormBtn} onClick={handleUpdateUser}>
				Update
			</button>
		</div>
	)
}
