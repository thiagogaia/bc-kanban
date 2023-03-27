/* eslint-disable no-unused-vars */
import type { ConnectDropTarget } from 'react-dnd';
import { useDrop } from 'react-dnd';

import type { DataStatus, DragItem } from '~/models/DataList';

import { useCards } from './useCards';

interface UseColumnDropReturn {
	isOver: boolean;
	dropRef: ConnectDropTarget;
}

export function useColumnDrop(column: DataStatus): UseColumnDropReturn {
	const { dropItem } = useCards();

	const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>({
		accept: 'TASK',
		drop: (dragItem) => {
			if (!dragItem || dragItem.from === column) {
				return;
			}

			dropItem({
				item: dragItem,
				from: dragItem.from,
				to: column,
			});
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	return {
		isOver,
		dropRef,
	};
}
