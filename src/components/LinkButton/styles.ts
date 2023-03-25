/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLinkContainer = styled(NavLink)`
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 1rem;
	text-decoration: none;
	color: ${({ theme }) => theme['gray-02']};
	border: 1px solid transparent;

	span {
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.25;
	}

	&.active {
		color: ${({ theme }) => theme.white};
	}

	&.active > span {
		font-weight: 700;
	}
`;
