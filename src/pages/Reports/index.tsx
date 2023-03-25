import type { ReactElement } from 'react';

import { ReportsContainer } from './styles';

export function Reports(): ReactElement {
	return (
		<ReportsContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
		>
			<h1>Relatórios</h1>
		</ReportsContainer>
	);
}
