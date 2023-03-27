/* eslint-disable no-unused-vars */
import { Plus } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';

import { useCards } from '~/hooks/useCards';
import { useColumnDrop } from '~/hooks/useDrop';
import type { DataItem, DataStatus } from '~/models/DataList';

import { Card } from '../Card';
import { CardForm } from '../CardForm';

import { BoxBoardContainer, BoxHeader, Cards } from './styles';

interface BoxBoardProps {
	column: DataStatus;
	data: DataItem[];
	search: string;
}

export enum BoxColumnToPtBr {
	todo = 'A fazer',
	doing = 'Fazendo',
	done = 'Feito',
}

export function BoxBoard({
	column,
	data,
	search,
}: BoxBoardProps): ReactElement {
	const { addItem } = useCards();
	const { dropRef, isOver } = useColumnDrop(column);

	const filteredData = data.filter(
		(item) =>
			item.title.toLocaleLowerCase().includes(search) ||
			item.content.toLocaleLowerCase().includes(search),
	);

	const [openCreateNewItem, setOpenCreateNewItem] = useState<boolean>(false);

	function toggleOpenCreateNewItem(): void {
		setOpenCreateNewItem((state) => !state);
	}

	return (
		<BoxBoardContainer>
			<BoxHeader>
				<h1>{BoxColumnToPtBr[column]}</h1>

				{column === 'todo' && !openCreateNewItem && (
					<Plus
						size={24}
						onClick={toggleOpenCreateNewItem}
					/>
				)}
			</BoxHeader>

			<Cards
				ref={dropRef}
				isOver={isOver}
			>
				{openCreateNewItem && (
					<CardForm handleClose={toggleOpenCreateNewItem} />
				)}

				{search &&
					filteredData.map((item) => (
						<Card
							key={item.id}
							data={item}
						/>
					))}

				{!search &&
					data.map((item) => (
						<Card
							key={item.id}
							data={item}
						/>
					))}
			</Cards>
		</BoxBoardContainer>
	);
}
