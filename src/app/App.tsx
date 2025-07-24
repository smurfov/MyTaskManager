import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.scss'
import { Dashboard } from '@/pages/Dashboard/Dashboard'
import { Profile } from '@/pages/Profile/Profile'
import { Project } from '@/pages/Project/Project'
import { Redirect } from '@/pages/Redirect/Redirect'
import { Settings } from '@/pages/Settings/Settings'
import { Team } from '@/pages/Team/Team'
import { ROUTES } from '@/shared/constants/routes'
import { Layout } from '@/widgets/Layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<ToastContainer position="bottom-right" />
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
	)
}

export default App
