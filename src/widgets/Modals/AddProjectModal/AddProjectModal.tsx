import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'

import './AddProjectModal.scss'
import { useProjectState } from '@/shared/stores/project.store'
import { useUIStore } from '@/shared/stores/ui.store'
import { Button } from '@/shared/ui/Button/Button'

export function AddProjectModal() {
	const { createProject } = useProjectState()
	const { activeModal, closeModal } = useUIStore()

	const [projectName, setProjectName] = useState('')
	const [error, setError] = useState('')

	const handleAddProject = () => {
		if (projectName.length < 3) {
			setError('Project name must be at least 3 characters long')
			return
		}

		createProject(projectName)
		setProjectName('')
		setError('')
		toast.success('Project added successfully!')
		closeModal()
	}

	if (activeModal !== 'addProject') return null

	return (
		<div className="add-project-modal">
			<div className="add-project-modal__body">
				<button onClick={closeModal} className="add-project-modal__btn-close">
					<IoMdClose />
				</button>
				<div className="add-project-modal__item">
					<div className="title">Project Name</div>
					<input
						type="text"
						placeholder="Type a name for a project"
						value={projectName}
						onChange={e => setProjectName(e.target.value)}
					/>
					{error && <div className="error">{error}</div>}
				</div>
				<Button
					className="add-project-modal__btn-add primary"
					onClick={handleAddProject}
					type="button"
				>
					Add Project
				</Button>
			</div>
		</div>
	)
}
