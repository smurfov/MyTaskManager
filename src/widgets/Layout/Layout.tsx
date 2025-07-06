import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.scss";
import { Header } from "../Header/Header";

export function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__outlet">
        <Header />
        <div className="padding">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
