import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ROUTES } from "../shared/constants/routes";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Profile } from "../pages/Profile/Profile";
import { Settings } from "../pages/Settings/Settings";
import { Layout } from "../widgets/Layout/Layout";
import { Project } from "../pages/Project/Project";
import { Redirect } from "../pages/Redirect/Redirect";
import { Team } from "../pages/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home.path} element={<Dashboard />} />
          <Route path={ROUTES.profile.path} element={<Profile />} />
          <Route path={ROUTES.settings.path} element={<Settings />} />
          <Route path={ROUTES.project.path} element={<Project />} />
          <Route path={ROUTES.team.path} element={<Team />} />
          <Route path="*" element={<Redirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
