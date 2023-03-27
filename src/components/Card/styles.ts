/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

interface CardContainerProps {
	isDragging: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
	background: ${({ theme }) => theme['white-01']};
	box-shadow: 0px 4px 16px #eae2fd;
	border-radius: 8px;
	padding: 1.5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border: 2px solid transparent;

	h2 {
		font-weight: 700;
		font-size: 0.875rem;
		line-height: 1.3;
		color: ${({ theme }) => theme['gray-01']};
	}

	p {
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 1.3;
		color: ${({ theme }) => theme['gray-06']};
	}

	${({ isDragging }) =>
		isDragging &&
		css`
			border: 2px dashed rgba(0, 0, 0, 0.2);
			box-shadow: none;
			background: transparent;
			/* opacity: 0.3; */

			h2,
			p,
			span {
				opacity: 0;
			}
		`}
`;

export const Tags = styled.div`
	display: flex;
	gap: 0.5rem;

	span {
		padding: 0.25rem 0.5rem;
		background: ${({ theme }) => theme['purple-02']};
		color: ${({ theme }) => theme['purple-01']};
		font-weight: 500;
		font-size: 0.6875rem;
		line-height: 1.3;
		border-radius: 8px;
	}
`;
