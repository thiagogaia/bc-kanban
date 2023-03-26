import type { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '~/layouts/default';
import { Boards } from '~/pages/Boards';
import { Reports } from '~/pages/Reports';
import { Settings } from '~/pages/Settings';
import { Teams } from '~/pages/Teams';

export function Router(): ReactElement {
	return (
		<Routes>
			<Route
				path="/"
				element={<DefaultLayout />}
			>
				<Route
					path="/"
					element={<Navigate to="/boards" />}
				/>

				<Route
					path="*"
					element={<Navigate to="/boards" />}
				/>

				<Route
					path="/boards"
					element={<Boards />}
				/>

				<Route
					path="/teams"
					element={<Teams />}
				/>

				<Route
					path="/reports"
					element={<Reports />}
				/>

				<Route
					path="/settings"
					element={<Settings />}
				/>
			</Route>
		</Routes>
	);
}
