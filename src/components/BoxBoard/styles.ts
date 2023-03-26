/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

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

export const Cards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 0 24px;
	height: 100%;
	overflow-y: auto;
	max-height: 35.25rem;
`;

export const BoxTitle = styled.div`
	padding: 1.5rem;
`;
