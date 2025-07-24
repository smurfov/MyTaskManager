import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './Sidebar.scss';
import { MAIN_MENU_LINKS, PROJECTS_LINKS } from './lib/sidebar.data';
import profileBlack from '@/assets/img/profile-icon-black.svg';
import profileWhite from '@/assets/img/profile-icon-white.svg';
import { ROUTES } from '@/shared/constants/routes';
import { useCheckScreenWidth } from '@/shared/hooks/useCheckScreenWidth';
import { useMoveSidebar } from '@/shared/hooks/useMoveSidebar';
import { useTheme } from '@/shared/hooks/useTheme';

export function Sidebar() {
	const { isActive, handleHideSidebar } = useMoveSidebar();
	const { theme } = useTheme();
	const isMobile = useCheckScreenWidth();

	const handleLinkClick = () => {
		if (isMobile) {
			handleHideSidebar();
		}
	};

	return (
		<div className={`sidebar ${isActive ? `active` : ''}`}>
			<div className="sidebar__container">
				{/* Account */}
				<div className="sidebar__account">
					<button onClick={handleHideSidebar} className="sidebar__active-btn">
						{isActive ? <IoIosArrowBack /> : <IoIosArrowForward />}
					</button>
					<div className="sidebar__account__title">Account</div>
					<Link
						className="sidebar__account__btn"
						to={ROUTES.profile.path}
						onClick={handleLinkClick}
					>
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
						{MAIN_MENU_LINKS.map(link => (
							<Link
								key={link.text}
								className="sidebar__main-menu__list__item"
								to={link.to}
								onClick={handleLinkClick}
							>
								{link.text}
							</Link>
						))}
					</div>
				</div>
				{/* Projects */}
				<div className="sidebar__projects">
					<div className="sidebar__projects__title">Projects</div>
					<div className="sidebar__projects__list">
						{PROJECTS_LINKS.map(link => (
							<Link
								key={link.text}
								to={link.to}
								className="sidebar__projects__list__item"
								onClick={handleLinkClick}
							>
								{link.text}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
