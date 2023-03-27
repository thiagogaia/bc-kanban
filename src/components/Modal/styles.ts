/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Trigger = styled(Dialog.Trigger)`
	cursor: pointer;
`;

export const Overlay = styled(Dialog.Overlay)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	inset: 0;
	background: rgba(0, 0, 0, 0.9);
`;

export const Content = styled(Dialog.Content)`
	padding: 1rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: ${({ theme }) => theme['purple-01']};
	border-radius: 8px;
`;

export const Close = styled(Dialog.Close)`
	position: absolute;
	background: transparent;
	border: 0;
	top: 1rem;
	right: 1rem;
	line-height: 0;
	cursor: pointer;
	color: ${({ theme }) => theme['white-01']};
`;

export const ModalContainer = styled.div``;

export const Header = styled.div`
	display: flex;

	svg {
		color: ${({ theme }) => theme['purple-01']};
		cursor: pointer;
		border-radius: 4px;

		&:hover {
			background: ${({ theme }) => theme['purple-01']};
			color: ${({ theme }) => theme['white-01']};
			transition: background-color 0.2s, color 0.2s;
		}
	}
`;

export const Title = styled(Dialog.Title)`
	font-weight: 600;
	font-size: 1.5rem;
	letter-spacing: 0.0015em;
`;
