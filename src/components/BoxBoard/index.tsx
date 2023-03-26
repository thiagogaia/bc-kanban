/* eslint-disable no-unused-vars */
import type { ReactElement } from 'react';

import type { DataList } from '~/models/DataList';

import { Card } from '../Card';

import { BoxBoardContainer, BoxTitle, Cards } from './styles';

interface BoxBoardProps {
	title: 'todo' | 'doing' | 'done';
	data: DataList[];
}

export enum BoxTitleToPtBr {
	todo = 'A fazer',
	doing = 'Fazendo',
	done = 'Feito',
}

export function BoxBoard({ title, data }: BoxBoardProps): ReactElement {
	return (
		<BoxBoardContainer>
			<BoxTitle>
				<h1>{BoxTitleToPtBr[title]}</h1>
			</BoxTitle>

			<Cards>
				{data.map((item) => (
					<Card
						key={item.id}
						data={item}
					/>
				))}
			</Cards>
		</BoxBoardContainer>
	);
}
