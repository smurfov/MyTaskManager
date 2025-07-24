import './Profile.scss'
import { UserAvatar } from '@/entities/User/ui/UserAvatar/UserAvatar'
import { UserInfo } from '@/entities/User/ui/UserInfo/UserInfo'
import { UpdateProfileInfo } from '@/features/UpdateProfileInfo'
import { useUserStore } from '@/shared/stores/user.store'

export function Profile() {
	const { user } = useUserStore()

	if (!user) {
		return <div>Loading user data...</div> // Or some spinner
	}

	return (
		<div className="profile">
			<div className="profile-header">
				<UserAvatar avatarUrl={user.avatarUrl} name={user.name} />
			</div>
			<div className="profile-info">
				<div className="profile__title">Info</div>
				<UserInfo name={user.name} email={user.email} />
			</div>
			<div className="profile-edit-form">
				<div className="profile__title">Update Form</div>
				<UpdateProfileInfo />
			</div>
		</div>
	)
}
