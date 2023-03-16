import React from 'react';
import { Link } from 'react-router-dom';

import courses from '../../../../assets/courses.png';
import { ROUTES } from '../../../../constants';

import './Logo.scss';

export const Logo = () => (
	<Link to={ROUTES.default}>
		<img className='logo' src={courses} />
	</Link>
);
