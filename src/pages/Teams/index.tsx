import type { ReactElement } from 'react';

import { TeamsContainer } from './styles';

export function Teams(): ReactElement {
	return (
		<TeamsContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
		>
			<h1>Equipes</h1>
		</TeamsContainer>
	);
}
