import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import profileBlack from '@/assets/img/profile-icon-black.svg'
import profileWhite from '@/assets/img/profile-icon-white.svg'
import { ROUTES } from '@/shared/constants/routes'
import { useMoveSidebar } from '@/shared/hooks/useMoveSidebar'
import { useTheme } from '@/shared/hooks/useTheme'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

export function Sidebar() {
	// const [isActive, setIsActive] = useState(false);
	const { isActive, handleHideSidebar } = useMoveSidebar()
	const { theme } = useTheme()

	return (
		<div className={`sidebar ${isActive ? `active` : ''}`}>
			<div className="sidebar__container">
				{/* Account */}
				<div className="sidebar__account">
					<button onClick={handleHideSidebar} className="sidebar__active-btn">
						{isActive ? <IoIosArrowBack /> : <IoIosArrowForward />}
					</button>
					<div className="sidebar__account__title">Account</div>
					<Link className="sidebar__account__btn" to={ROUTES.profile.path}>
						<img
							className="sidebar__account__btn__img"
							src={theme === 'dark' ? profileWhite : profileBlack}
							alt="profile icon"
						/>
						<div className="sidebar__account__btn__text">Profile</div>
					</Link>
				</div>
				{/* Main Menu */}
				<div className="sidebar__main-menu">
					<div className="sidebar__main-menu__title">Main Menu</div>
					<div className="sidebar__main-menu__list">
						<Link
							className="sidebar__main-menu__list__item"
							to={ROUTES.home.path}
						>
							Dashboard
						</Link>
						<Link
							className="sidebar__main-menu__list__item"
							to={ROUTES.team.path}
						>
							Team
						</Link>
						<Link
							className="sidebar__main-menu__list__item"
							to={ROUTES.settings.path}
						>
							Settings
						</Link>
					</div>
				</div>
				{/* Projects */}
				<div className="sidebar__projects">
					<div className="sidebar__projects__title">Projects</div>
					<div className="sidebar__projects__list">
						<Link
							to={ROUTES.project.path}
							className="sidebar__projects__list__item"
						>
							My Project
						</Link>
						<Link
							to={ROUTES.project.path}
							className="sidebar__projects__list__item"
						>
							Your Project
						</Link>
						<Link
							to={ROUTES.project.path}
							className="sidebar__projects__list__item"
						>
							Other Project
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
