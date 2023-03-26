/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoardsContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 100%;
	width: 100%;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;

	img {
		width: 4rem;
		height: 4rem;
	}
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

export const BoxSearchFilter = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Search = styled.div`
	flex: 1;
	position: relative;

	input {
		width: 100%;
		height: 3rem;
		padding-left: 3.625rem;
		border-radius: 8px;
		border: 0.7px solid ${({ theme }) => theme['gray-04']};
		box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
	}

	svg {
		position: absolute;
		left: 24px;
		top: 12px;
		color: ${({ theme }) => theme['gray-05']};
	}
`;

export const ButtonFilter = styled.button`
	height: 3rem;
	width: 8.4375rem;
	border-radius: 5px;
	border: 0;
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: ${({ theme }) => theme.purple};
	color: ${({ theme }) => theme.white};
	font-weight: 400;
	font-size: 0.875rem;
`;

export const BoxBoards = styled.div`
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	gap: 3rem;
	overflow: auto;
`;
