import { Outlet } from 'react-router-dom'

import './Layout.scss'
import { Header } from '@/widgets/Header/Header'
import { ModalManager } from '@/widgets/Modals/ModalManager'
import { Sidebar } from '@/widgets/Sidebar/Sidebar'

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
			<ModalManager />
		</div>
	)
}
