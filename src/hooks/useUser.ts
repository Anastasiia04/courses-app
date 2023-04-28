import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../helpers/userData';
import { loadUser } from '../store/user/thunk';
import { selectUser } from '../store/user/userSelector';

export const useUser = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = getUserToken();
		if (!token) {
			setLoading(false);
		} else {
			loadUser(token)(dispatch);
		}
	}, []);

	useEffect(() => {
		if (user) {
			setLoading(false);
		}
	}, [user]);

	return { loading, user };
};
