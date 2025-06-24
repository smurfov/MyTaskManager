import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/constants/routes";
import "./Sidebar.scss";
import { useState } from "react";

export function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  //TODO - Add styles for Account and Panel. And think about another buttons in panel or under "dashboard"

  return (
    <div className={`sidebar ${isActive ? `active` : ""}`}>
      <div className="sidebar__container">
        {/* Account */}
        <div className="sidebar__account">
          <button
            onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
            className="sidebar__active-btn"
          >
            {isActive ? "->" : "<-"}
          </button>
          <div className="sidebar__account__title">Account</div>
          <Link className="sidebar__account__btn" to={ROUTES.profile.path}>
            <img
              className="sidebar__account__btn__img"
              src="/img/profile icon.svg"
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
  );
}
