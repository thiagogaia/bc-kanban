import type { ReactElement } from 'react';

import { useDragAndDrop } from '~/hooks/useDragAndDrop';
import type { DataItem } from '~/models/DataList';

import { CardContainer, Tags } from './styles';

interface CardProps {
	data: DataItem;
}

export function Card({ data }: CardProps): ReactElement {
	const { isDragging, ref } = useDragAndDrop<HTMLDivElement>({
		task: data,
	});

	return (
		<CardContainer
			ref={ref}
			isDragging={isDragging}
		>
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
