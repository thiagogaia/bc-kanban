/* eslint-disable no-unused-vars */

import { useContext } from 'react';

import type { BoardContextType } from '~/contexts/BoardContext';
import { BoardContext } from '~/contexts/BoardContext';

export function useCards(): BoardContextType {
	const context = useContext(BoardContext);

	if (!context) throw new Error('useAuth precisa ser usado com o AuthProvider');

	return context;
}
