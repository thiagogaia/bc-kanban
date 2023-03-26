import { v4 as uuidv4 } from 'uuid';

import type { DataList } from '~/models/DataList';

export const DataListMock: DataList[] = [
	{
		id: uuidv4(),
		title: '#boraCodar um Kanban 🧑‍💻',
		content:
			'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
		tags: [
			{
				id: uuidv4(),
				name: 'rocketseat',
			},
			{
				id: uuidv4(),
				name: 'desafio',
			},
		],
		status: 'todo',
	},
	{
		id: uuidv4(),
		title: 'Manter a ofensiva 🔥',
		content:
			'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
		tags: [
			{
				id: uuidv4(),
				name: 'rocketseat',
			},
		],
		status: 'todo',
	},
	{
		id: uuidv4(),
		title: 'Almoçar 🥗',
		content:
			'Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço',
		tags: [
			{
				id: uuidv4(),
				name: 'autocuidado',
			},
		],
		status: 'todo',
	},

	{
		id: uuidv4(),
		title: 'Conferir o novo desafio 🚀 ',
		content:
			'Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível',
		tags: [
			{
				id: uuidv4(),
				name: 'rocketseat',
			},
			{
				id: uuidv4(),
				name: 'desafio',
			},
		],
		status: 'doing',
	},
	{
		id: uuidv4(),
		title: 'Ser incrível 😎',
		content: 'Sempre me lembrar de manter minha autenticidade e espalhar amor',
		tags: [
			{
				id: uuidv4(),
				name: 'autocuidado',
			},
		],
		status: 'doing',
	},

	{
		id: uuidv4(),
		title: '#boraCodar uma página de login 🧑‍💻',
		content:
			'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
		tags: [
			{
				id: uuidv4(),
				name: 'rocketseat',
			},
			{
				id: uuidv4(),
				name: 'desafio',
			},
		],
		status: 'done',
	},
	{
		id: uuidv4(),
		title: '#boraCodar uma página de clima 🧑‍💻 ',
		content:
			'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
		tags: [
			{
				id: uuidv4(),
				name: 'rocketseat',
			},
			{
				id: uuidv4(),
				name: 'desafio',
			},
		],
		status: 'done',
	},
	{
		id: uuidv4(),
		title: '#boraCodar um conversor 🧑‍💻',
		content:
			'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
		tags: [
			{
				id: uuidv4(),
				name: 'rocketseat',
			},
			{
				id: uuidv4(),
				name: 'desafio',
			},
		],
		status: 'done',
	},
];
