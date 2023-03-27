import type { RefObject } from 'react';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';

import type { DataItem, DragItem } from '~/models/DataList';

interface useDragAndDropProps {
	task: DataItem;
}

interface DragAndDropReturn<T> {
	ref: RefObject<T>;
	isDragging: boolean;
}

export function useDragAndDrop<T extends HTMLElement>({
	task,
}: useDragAndDropProps): DragAndDropReturn<T> {
	const ref = useRef<T>(null);

	const [{ isDragging }, drag] = useDrag<
		DragItem,
		void,
		{ isDragging: boolean }
	>({
		item: { from: task.status, id: task.id },
		type: 'TASK',
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(ref);

	return {
		ref,
		isDragging,
	};
}
