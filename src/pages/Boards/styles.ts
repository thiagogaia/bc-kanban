/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoardsContainer = styled(motion.section)`
	flex: 1;
	background: ${({ theme }) => theme.white};
	margin-top: 0.25rem;
	padding-top: 3rem;
	padding-left: 2rem;
	padding-right: 2rem;
	border-top-left-radius: 2rem;
`;

export const Header = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	padding: 0 1.5rem;
`;

export const TitleContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	h1 {
		font-weight: 700;
		font-size: 2rem;
		line-height: 1.3;
		color: ${({ theme }) => theme['gray-01']};
	}

	svg {
		color: ${({ theme }) => theme['gray-03']};
	}
`;
