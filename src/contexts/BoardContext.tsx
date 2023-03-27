/* eslint-disable no-unused-vars */
import type { ReactElement, ReactNode } from 'react';
import { createContext, useCallback, useEffect, useState } from 'react';

import { DataListMock } from '~/mock/data';
import type { DataItem, DataStatus, DragItem } from '~/models/DataList';

export interface BoardContextType {
	todoCards: DataItem[];
	doingCards: DataItem[];
	doneCards: DataItem[];
	dropItem: (data: MoveProps) => void;
}

interface BoardContextProps {
	children: ReactNode;
}

interface MoveProps {
	item: DragItem;
	from: DataStatus;
	to: DataStatus;
}

const AUTH_STORAGE_KEY = 'BC:KANBAN@1.0.0';

export const BoardContext = createContext({} as BoardContextType);

export function BoardContextProvider({
	children,
}: BoardContextProps): ReactElement {
	const [cards, setCards] = useState<DataItem[]>(() => {
		const storageData = localStorage.getItem(AUTH_STORAGE_KEY);

		if (!storageData) return DataListMock;

		return JSON.parse(storageData);
	});

	const dropItem = useCallback(
		(data: MoveProps) => {
			const movingCard = cards.find((card) => card.id === data.item.id);

			const movingCardUpdate: DataItem = {
				...movingCard,
				status: data.to,
			} as DataItem;

			setCards((state) =>
				state.map((card) =>
					card.id === movingCardUpdate.id ? movingCardUpdate : card,
				),
			);
		},
		[cards],
	);

	const todoCards = cards.filter((card) => card.status === 'todo');
	const doingCards = cards.filter((card) => card.status === 'doing');
	const doneCards = cards.filter((card) => card.status === 'done');

	useEffect(() => {
		if (cards) {
			const storageData = JSON.stringify(cards);
			localStorage.setItem(AUTH_STORAGE_KEY, storageData);
		}

		if (!cards) {
			localStorage.removeItem(AUTH_STORAGE_KEY);
		}
	}, [cards]);

	return (
		<BoardContext.Provider
			value={{
				dropItem,
				todoCards,
				doingCards,
				doneCards,
			}}
		>
			{children}
		</BoardContext.Provider>
	);
}
