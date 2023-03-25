import type { ReactElement } from 'react';

import { SettingsContainer } from './styles';

export function Settings(): ReactElement {
	return (
		<SettingsContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
		>
			<h1>Ajustes</h1>
		</SettingsContainer>
	);
}
