import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'src/constants';
import { UserRole } from 'src/helpers/userData';
import { selectUser } from 'src/store/user/userSelector';

export function PrivateRouter({ children }: any) {
	const user = useSelector(selectUser);
	return user?.role === UserRole.admin ? (
		children
	) : (
		<Navigate to={ROUTES.courses} />
	);
}
