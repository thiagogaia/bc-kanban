export type DataStatus = 'done' | 'doing' | 'todo';

export interface Tag {
	id?: string;
	name: string;
}

export interface DataItem {
	id?: string;
	title: string;
	status: DataStatus;
	content: string;
	tags: Tag[];
}

export interface DragItem {
	// index: number;
	id: DataItem['id'];
	from: DataStatus;
}
