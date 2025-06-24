import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.scss";

export function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__outlet">
        <Outlet />
      </div>
    </div>
  );
}
