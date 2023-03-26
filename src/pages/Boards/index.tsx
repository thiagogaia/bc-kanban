import { FunnelSimple, MagnifyingGlass, PencilSimple } from 'phosphor-react';
import type { ReactElement } from 'react';

import { Profile } from '~/assets';
import { BoxBoard } from '~/components/BoxBoard';
import { DataListMock } from '~/mock/data';

import {
	BoardsContainer,
	BoxBoards,
	BoxSearchFilter,
	ButtonFilter,
	Header,
	Search,
	TitleContent,
} from './styles';

export function Boards(): ReactElement {
	return (
		<BoardsContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
		>
			<Header>
				<TitleContent>
					<h1>Meu Kanban</h1>
					<PencilSimple
						size={24}
						weight="fill"
					/>
				</TitleContent>

				<img
					src={Profile}
					alt="Profile Image"
				/>
			</Header>

			<BoxSearchFilter>
				<ButtonFilter>
					<FunnelSimple
						size={24}
						weight="bold"
					/>
					Filtrar
				</ButtonFilter>

				<Search>
					<input
						type="text"
						placeholder="Busque por cards, assuntos ou responsáveis..."
					/>
					<MagnifyingGlass size={24} />
				</Search>
			</BoxSearchFilter>

			<BoxBoards>
				<BoxBoard
					title="todo"
					data={DataListMock.filter((data) => data.status === 'todo')}
				/>
				<BoxBoard
					title="doing"
					data={DataListMock.filter((data) => data.status === 'doing')}
				/>
				<BoxBoard
					title="done"
					data={DataListMock.filter((data) => data.status === 'done')}
				/>
			</BoxBoards>
		</BoardsContainer>
	);
}
