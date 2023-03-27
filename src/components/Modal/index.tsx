import { Portal, Root } from '@radix-ui/react-dialog';
import type { Icon as NavIconType } from 'phosphor-react';
import { X } from 'phosphor-react';
import type { ReactElement, ReactNode } from 'react';

import {
	Close,
	Content,
	Header,
	ModalContainer,
	Overlay,
	Title,
	Trigger,
} from './styles';

// import { IconView } from '~/assets/images';

interface ModalProps {
	title: string;
	children: ReactNode;
	OpenIcon: NavIconType;
}

export function Modal({ children, title, OpenIcon }: ModalProps): ReactElement {
	return (
		<ModalContainer>
			<Root>
				<Header>
					<Trigger asChild>{OpenIcon && <OpenIcon size={24} />}</Trigger>
				</Header>
				<Portal>
					<Overlay />
					<Content>
						<Title>{title}</Title>
						<Close>
							<X size={24} />
						</Close>
						{children}
					</Content>
				</Portal>
			</Root>
		</ModalContainer>
	);
}
