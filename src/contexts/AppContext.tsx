import type { ReactElement, ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { BoardContextProvider } from './BoardContext';

interface AppProviderProps {
	children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): ReactElement {
	return (
		<DndProvider backend={HTML5Backend}>
			<BoardContextProvider>{children}</BoardContextProvider>
		</DndProvider>
	);
}
