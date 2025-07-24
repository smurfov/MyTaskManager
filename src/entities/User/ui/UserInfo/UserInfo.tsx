import style from './UserInfo.module.scss'

type UserInfoProps = {
	name: string
	email: string
}

export function UserInfo({ name, email }: UserInfoProps) {
	return (
		<div className={style.userInfo}>
			<div className={style.userInfoItem}>
				<div className={style.userInfoTitle}>Name</div>
				<div className={style.userInfoInfo}>{name}</div>
			</div>
			<div className={style.userInfoItem}>
				<div className={style.userInfoTitle}>E-mail</div>
				<div className={style.userInfoInfo}>{email}</div>
			</div>
		</div>
	)
}
