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

export function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout(user));
		clearUserToken();
		navigate(ROUTES.login);
	};
	return (
		<header className='header'>
			<Logo />
			{user ? (
				<div className='user-bar'>
					<div className='user-bar__username'>{user.name}</div>
					<Button
						className='user-bar__button'
						buttonText={LOGOUT_BUTTON_TEXT}
						buttonType='button'
						onClick={logoutHandler}
					/>
				</div>
			) : null}
		</header>
	);
}
