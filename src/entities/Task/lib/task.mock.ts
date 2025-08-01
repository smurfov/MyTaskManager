import type { ITask } from '../model/task.type'

export const taskMock: ITask[] = [
	{
		name: 'SADdassda',
		id: 1,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'todo',
		priority: 'high',
		deadline: '10.07.2025',
		tags: ['frontend', 'urgent'],
		subtasks: [
			{ name: 'Подзадача 1', done: false },
			{ name: 'Подзадача 2', done: true }
		],
		comments: [{ author: 'Петр', text: 'Проверь детали', date: '07.07.2025' }]
	},
	{
		name: 'dDSFa',
		id: 2,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'in progress',
		priority: 'medium',
		deadline: '12.07.2025',
		tags: ['backend'],
		subtasks: [],
		comments: []
	},
	{
		name: 'KAJFK',
		id: 3,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'todo',
		priority: 'low',
		deadline: '15.07.2025',
		tags: ['bug'],
		subtasks: [{ name: 'Проверить баг', done: false }],
		comments: [
			{ author: 'Анна', text: 'Воспроизводится не всегда', date: '08.07.2025' }
		]
	},
	{
		name: 'UIBAI V',
		id: 4,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'in progress',
		priority: 'none',
		deadline: '',
		tags: [],
		subtasks: [],
		comments: []
	},
	{
		name: 'K ANSKLd',
		id: 5,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'done',
		priority: 'medium',
		deadline: '09.07.2025',
		tags: ['release'],
		subtasks: [{ name: 'Сделать релиз', done: true }],
		comments: [{ author: 'Игорь', text: 'Всё ок', date: '09.07.2025' }]
	},
	{
		name: 'POASDop',
		id: 6,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'todo',
		priority: 'low',
		deadline: '',
		tags: [],
		subtasks: [],
		comments: []
	},
	{
		name: ' AISjd',
		id: 7,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'in progress',
		priority: 'high',
		deadline: '11.07.2025',
		tags: ['important'],
		subtasks: [{ name: 'Созвониться с командой', done: false }],
		comments: []
	},
	{
		name: ':LASJdioa',
		id: 8,
		description: 'This is my description for my task',
		createdAt: '06.07.2025',
		status: 'done',
		priority: 'none',
		deadline: '',
		tags: [],
		subtasks: [],
		comments: []
	}
]
