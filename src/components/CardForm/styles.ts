/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
	background: ${({ theme }) => theme['white-01']};
	box-shadow: 0px 4px 16px #eae2fd;
	border-radius: 8px;
	padding: 1.5rem;
	width: 100%;

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

interface FormControlProps {
	error: boolean;
}

export const FormControl = styled.div<FormControlProps>`
	input {
		height: 2rem;
		color: ${({ theme }) => theme['purple-01']};
		border-radius: 4px;
		width: 100%;
		border: 1px solid transparent;
		border-bottom-color: ${({ theme }) => theme['purple-02']};
		padding: 0.3rem 0.5rem;
		box-shadow: 0 0 0 1px transparent;

		&:focus {
			border-bottom-color: ${({ theme }) => theme['purple-01']};
		}

		${({ error }) =>
			error &&
			css`
				border-bottom-color: #9e332d;
			`}
	}

	textarea {
		color: ${({ theme }) => theme['purple-01']};
		border-radius: 4px;
		min-width: 100%;
		min-height: 2rem;
		height: 100%;
		border: 1px solid transparent;
		border-bottom-color: ${({ theme }) => theme['purple-02']};
		padding: 0.3rem 0.5rem;
		box-shadow: 0 0 0 1px transparent;

		&:focus {
			border-bottom-color: ${({ theme }) => theme['purple-01']};
		}

		${({ error }) =>
			error &&
			css`
				border-bottom-color: #9e332d;
			`}
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: flex-end;

	button {
		padding: 0 0.3rem;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		border-radius: 4px;
		&:hover {
			background: ${({ theme }) => theme['purple-02']};
		}
	}
`;
