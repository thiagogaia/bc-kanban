import type { IconProps } from 'phosphor-react';
import type { RefAttributes } from 'react';
import type { NavLinkProps } from 'react-router-dom';

export type LinkButtonType = 'boards' | 'teams';

export type NavLinkType = NavLinkProps & RefAttributes<HTMLAnchorElement>;

export type NavIconType = IconProps & RefAttributes<SVGSVGElement>;
