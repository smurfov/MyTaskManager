import { create } from 'zustand'

import type { IProject } from '@/entities/Project'
import { projectMock } from '@/entities/Project/lib/project.mock'

export type projectId = number

interface ProjectState {
	projects: IProject[]
	createProject: (name: string) => void
	getProjectById: (projectId: projectId) => IProject | undefined
	deleteProject: (projectId: projectId) => void
}

export const useProjectState = create<ProjectState>((set, get) => ({
	projects: projectMock,
	createProject: name => {
		set(state => {
			const maxId = state.projects.reduce(
				(max, project) => (project.id > max ? project.id : max),
				0
			)

			const newProject = {
				id: maxId + 1,
				name
			}

			return { projects: [...state.projects, newProject] }
		})
	},
	getProjectById: projectId => get().projects.find(i => i.id === projectId),
	deleteProject: projectId => {
		set(state => ({
			projects: state.projects.filter(i => i.id !== projectId)
		}))
	}
}))
