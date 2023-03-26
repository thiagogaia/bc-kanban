/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const LayoutContainer = styled.div`
	display: flex;
`;

export const ViewBoard = styled.main`
	flex: 1;
	background: ${({ theme }) => theme.white};
	margin-top: 0.25rem;
	padding-top: 3rem;
	padding-left: 2rem;
	padding-right: 2rem;
	border-top-left-radius: 2rem;
	height: calc(100vh - 0.25rem);
	overflow: hidden;
`;
