import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { LOGOUT_BUTTON_TEXT, ROUTES } from '../../constants';
import { UserContext } from '../../contexts/userContext';

import './Header.scss';
import { clearUserData } from '../../helpers/userData';

export function Header() {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const logout = () => {
		clearUserData();
		setUser({ name: '', token: '' });
		navigate(ROUTES.login);
	};
	return (
		<header className='header'>
			<Logo />
			{user.token ? (
				<div className='user-bar'>
					<div className='user-bar__username'>{user.name}</div>
					<Button
						className='user-bar__button'
						buttonText={LOGOUT_BUTTON_TEXT}
						buttonType='button'
						onClick={logout}
					/>
				</div>
			) : null}
		</header>
	);
}
