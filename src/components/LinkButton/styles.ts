/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLinkContainer = styled(NavLink)`
	flex: 1;
	width: 10.9375rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 1rem;
	text-decoration: none;
	color: ${({ theme }) => theme['gray-02']};

	span {
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.25;
	}

	&.active {
		color: ${({ theme }) => theme['white-01']};
	}

	&.active > span {
		font-weight: 700;
	}
`;
