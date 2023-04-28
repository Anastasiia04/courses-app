import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { LOGOUT_BUTTON_TEXT, ROUTES } from '../../constants';

import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/store/user/userActions';
import { selectUser } from 'src/store/user/userSelector';
import { clearUserToken } from '../../helpers/userData';
import { logoutUser } from '../../store/user/thunk';

export function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		logoutUser()(dispatch);
		clearUserToken();
		navigate(ROUTES.login);
	};
	return (
		<header className='header'>
			<Logo />
			{user ? (
				<div className='user-bar'>
					<div className='user-bar__username' data-testid='username'>
						{user.name}
					</div>
					<Button className='user-bar__button' onClick={logoutHandler}>
						{LOGOUT_BUTTON_TEXT}
					</Button>
				</div>
			) : (
				<div className='user-bar__login-message'>
					Please log in to access your account.
				</div>
			)}
		</header>
	);
}
