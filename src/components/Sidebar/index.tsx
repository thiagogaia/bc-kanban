import { DeviceTabletSpeaker, Users } from 'phosphor-react';
import type { ReactElement } from 'react';

import { Logo } from '~/assets';

import { LinkButton } from '../LinkButton';

import { SidebarContainer, SidebarMenu } from './styles';

export function Sidebar(): ReactElement {
	return (
		<SidebarContainer>
			<img
				src={Logo}
				alt="Logo Image"
				loading="lazy"
			/>

			<SidebarMenu>
				<LinkButton
					to="/boards"
					label="Boards"
					Icon={DeviceTabletSpeaker}
				/>

				<LinkButton
					to="/teams"
					label="Equipes"
					Icon={Users}
				/>
			</SidebarMenu>
		</SidebarContainer>
	);
}
