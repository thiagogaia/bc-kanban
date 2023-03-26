/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const CardContainer = styled.div`
	flex: 1;
	background: ${({ theme }) => theme['white-01']};
	box-shadow: 0px 4px 16px #eae2fd;
	border-radius: 8px;
	padding: 1.5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;

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
	}
`;
