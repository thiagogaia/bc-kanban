import type { Icon as NavIconType } from 'phosphor-react';
import type { ReactElement } from 'react';

import type { NavLinkType } from '~/models/LinkButton';

import { ButtonLinkContainer } from './styles';

interface LinkButtonProps extends NavLinkType {
	label: string;
	Icon: NavIconType;
}

export function LinkButton({
	label,
	Icon,
	...rest
}: LinkButtonProps): ReactElement {
	return (
		<ButtonLinkContainer {...rest}>
			{Icon && (
				<Icon
					size={20}
					weight="fill"
				/>
			)}
			<span>{label}</span>
		</ButtonLinkContainer>
	);
}
