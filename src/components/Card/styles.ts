/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const CardContainer = styled.div`
	flex: 1;
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
