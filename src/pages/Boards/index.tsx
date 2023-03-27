import { FunnelSimple, MagnifyingGlass, PencilSimple } from 'phosphor-react';
import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

import { Profile } from '~/assets';
import { BoxBoard } from '~/components/BoxBoard';
import { useCards } from '~/hooks/useCards';

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
	const { doingCards, doneCards, todoCards } = useCards();
	const [query, setQuery] = useState<string>('');

	function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
		setQuery(event.target.value);
	}

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
						value={query}
						onChange={handleSearch}
					/>
					<MagnifyingGlass size={24} />
				</Search>
			</BoxSearchFilter>

			<BoxBoards>
				<BoxBoard
					column="todo"
					data={todoCards}
					search={query}
				/>
				<BoxBoard
					column="doing"
					data={doingCards}
					search={query}
				/>
				<BoxBoard
					column="done"
					data={doneCards}
					search={query}
				/>
			</BoxBoards>
		</BoardsContainer>
	);
}
