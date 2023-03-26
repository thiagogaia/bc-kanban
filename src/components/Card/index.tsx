import type { ReactElement } from 'react';

import type { DataList } from '~/models/DataList';

import { CardContainer, Tags } from './styles';

interface CardProps {
	data: DataList;
}

export function Card({ data }: CardProps): ReactElement {
	return (
		<CardContainer>
			<h2>{data.title}</h2>

			<p>{data.content}</p>

			<Tags>
				{data.tags.map((item) => (
					<span key={item.id}>{item.name}</span>
				))}
			</Tags>
		</CardContainer>
	);
}
