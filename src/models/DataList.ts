export type DataStatus = 'done' | 'doing' | 'todo';

export interface Tag {
	id?: string;
	name: string;
}

export interface DataList {
	id?: string;
	title: string;
	status: DataStatus;
	content: string;
	tags: Tag[];
}
