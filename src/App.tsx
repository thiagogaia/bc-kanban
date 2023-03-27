import type { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from './contexts/AppContext';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<AppProvider>
					<Router />
				</AppProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
