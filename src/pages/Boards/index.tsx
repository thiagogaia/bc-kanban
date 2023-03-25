import { PencilSimple } from 'phosphor-react';
import type { ReactElement } from 'react';

import { Profile } from '~/assets';

import { BoardsContainer, Header, TitleContent } from './styles';

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
		</BoardsContainer>
	);
}
