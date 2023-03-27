/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';
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

interface CardsProps {
	isOver: boolean;
}

export const Cards = styled.div<CardsProps>`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 0 24px;
	height: 100%;
	overflow-y: auto;
	max-height: 35.25rem;
	padding: 1rem 1.5rem;
	border-radius: 8px;

	${({ isOver }) =>
		isOver &&
		css`
			opacity: 0.8;
			background: rgba(0, 0, 0, 0.05);
		`}
`;

export const BoxHeader = styled.div`
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
`;

export const Form = styled.form`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 30rem;
`;

interface FormControlProps {
	error: boolean;
}

export const FormControl = styled.div<FormControlProps>`
	width: 100%;

	input {
		width: 100%;
		height: 2.5rem;
		border-radius: 8px;
		border: 1px solid transparent;
		padding-left: 1rem;
		background: ${({ theme }) => theme['purple-02']};
		font-weight: 400;
		font-size: 1.25rem;
		letter-spacing: 0.0015em;
		color: ${({ theme }) => theme['purple-01']};

		&::placeholder {
			color: ${({ theme }) => theme['purple-01']};
		}

		${({ error, theme }) =>
			error &&
			css`
				border: 1px solid ${theme['purple-01']};
			`}
	}

	textarea {
		min-width: 100%;
		min-height: 3rem;
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.75rem 1rem;
		background: ${({ theme }) => theme['purple-02']};
		font-weight: 400;
		font-size: 1.25rem;
		letter-spacing: 0.0015em;
		color: ${({ theme }) => theme['purple-01']};

		&::placeholder {
			color: ${({ theme }) => theme['purple-01']};
		}

		${({ error, theme }) =>
			error &&
			css`
				border: 1px solid ${theme['purple-01']};
			`}
	}
`;

export const CloseButton = styled.button`
	height: 2.5rem;
	border-radius: 8px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme['white-02']};
	background: ${({ theme }) => theme['purple-01']};
	color: ${({ theme }) => theme['white-01']};

	&:disabled {
		cursor: not-allowed;
		opacity: 0.1;
	}
`;
