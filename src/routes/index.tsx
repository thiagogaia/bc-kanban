import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '~/layouts/default';

export function Router(): ReactElement {
	return (
		<Routes>
			<Route
				path="/"
				element={<DefaultLayout />}
			>
				<Route
					path="/boards"
					element={<h1>Boards</h1>}
				/>

				<Route
					path="/teams"
					element={<h1>Equipes</h1>}
				/>
			</Route>
		</Routes>
	);
}
