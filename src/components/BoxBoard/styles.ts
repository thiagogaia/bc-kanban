/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

export const BoxBoardContainer = styled.div`
	min-width: 23.0206rem;
	width: 100%;
	overflow-y: hidden;

	h1 {
		color: ${({ theme }) => theme['gray-01']};
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.3;
	}
`;

interface CardsProps {
	isOver: boolean;
}

export const Cards = styled.div<CardsProps>`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 0 24px;
	height: 100%;
	overflow-y: auto;
	max-height: 35.25rem;
	padding: 1rem 1.5rem;
	border-radius: 8px;

	${({ isOver }) =>
		isOver &&
		css`
			opacity: 0.8;
			background: rgba(0, 0, 0, 0.05);
		`}
`;

export const BoxHeader = styled.div`
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;

	&:has(svg) {
		svg {
			color: ${({ theme }) => theme['purple-01']};
			cursor: pointer;
			border-radius: 4px;
		}

		svg:hover {
			background: ${({ theme }) => theme['purple-01']};
			color: ${({ theme }) => theme['white-01']};
			transition: background-color 0.2s, color 0.2s;
		}
	}
`;
