/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TeamsContainer = styled(motion.section)`
	flex: 1;

	/*  ref */
	h1 {
		font-weight: 700;
		font-size: 2rem;
		line-height: 1.3;
		color: ${({ theme }) => theme['gray-01']};
	}
	/*  */
`;
