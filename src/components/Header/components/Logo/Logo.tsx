import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../constants';
import { ReactComponent as LogoIcon } from 'src/assets/icons/graduation-cap-svgrepo-com.svg';

import './Logo.scss';

export const Logo = () => (
	<Link to={ROUTES.default}>
		<LogoIcon />
	</Link>
);
