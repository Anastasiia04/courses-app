import { useEffect, useState } from 'react';
import { getUserData, IUser } from '../helpers/userData';

export const useUser = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<IUser>({ name: '', token: '' });

	useEffect(() => {
		const user = getUserData();
		setUser(user);
		setLoading(false);
	}, []);

	return { loading, user, setUser };
};
