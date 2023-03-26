import type { ReactElement } from 'react';

import { CardContainer, Tags } from './styles';

export function Card(): ReactElement {
	return (
		<CardContainer>
			<h2>Conferir o novo desafio 🚀 </h2>

			<p>
				Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira
				possível
			</p>

			<Tags>
				<span>rocketseat</span>
				<span>desafio</span>
			</Tags>
		</CardContainer>
	);
}
