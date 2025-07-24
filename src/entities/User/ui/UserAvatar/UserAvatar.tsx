import styles from './UserAvatar.module.scss'
import profileBlack from '@/assets/img/profile-icon-black.svg'
import profileWhite from '@/assets/img/profile-icon-white.svg'
import { useTheme } from '@/shared/hooks/useTheme'

interface UserAvatarProps {
	avatarUrl?: string | null
	name?: string
	className?: string
}

export function UserAvatar({ avatarUrl, name, className }: UserAvatarProps) {
	const { theme } = useTheme()

	if (avatarUrl) {
		return (
			<img
				src={avatarUrl}
				alt={name || 'User Avatar'}
				className={`${styles.avatar} ${className || ''}`}
			/>
		)
	}

	return (
		<div className={`${styles.avatar} ${className || ''}`}>
			<img
				src={theme === 'dark' ? profileWhite : profileBlack}
				alt="profile avatar"
			/>
		</div>
	)
}
