/* eslint-disable no-unused-vars */
import type { ReactElement } from 'react';

import { Card } from '../Card';

import { BoxBoardContainer, BoxTitle, Cards } from './styles';

interface BoxBoardProps {
	title: 'todo' | 'doing' | 'done';
}

export enum BoxTitleToPtBr {
	todo = 'A fazer',
	doing = 'Fazendo',
	done = 'Feito',
}

export function BoxBoard({ title }: BoxBoardProps): ReactElement {
	return (
		<BoxBoardContainer>
			<BoxTitle>
				<h1>{BoxTitleToPtBr[title]}</h1>
			</BoxTitle>

			<Cards>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />

				<Card />
			</Cards>
		</BoxBoardContainer>
	);
}
