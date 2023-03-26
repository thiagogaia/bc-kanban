/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const BoxBoardContainer = styled.div`
	height: 100%;
	min-width: 23.0206rem;
	width: 100%;
	overflow-y: auto;

	h1 {
		color: ${({ theme }) => theme['gray-01']};
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.3;
	}
`;

export const Cards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 0 24px;
`;

export const BoxTitle = styled.div`
	padding: 1.5rem;
`;
